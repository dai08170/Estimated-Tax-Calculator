/* Creates a Pie Chart for Tax Calculator
  1. Gets user unput information from calculator form
  2. Calculates tax
  3. Adds percentages and pushes information into an array
  4. Outputs a single pie chart, with inner radius, summarizing of the following:
    - Adjsuted Gross Deductions
    - Itemized or Standard Deduction
    - Exemptions
    - Taxable Income Less Tax
    - Tax
*/

function pieCalculator() {

  // Set Filing Status
  var filingStatus;
  var form1040line1 = document.getElementById("form1040line1").checked; // Single
  var form1040line2 = document.getElementById("form1040line2").checked; // Married Filing Joint
  var form1040line3 = document.getElementById("form1040line3").checked; // Married Filing Separately
  var form1040line4 = document.getElementById("form1040line4").checked; // Head of Household
  var form1040line5 = document.getElementById("form1040line5").checked; // Qualifying Widower
    if (form1040line1 == true) {filingStatus = "Single";}
    else if (form1040line2 == true) {filingStatus = "MFJ";}
    else if (form1040line3 == true) {filingStatus = "MFS";}
    else if (form1040line4 == true) {filingStatus = "HoH";}
    else if (form1040line5 == true) {filingStatus = "QW";}
    else {filingStatus = undefined;} // Filing Status Error

  // Set Standard Deduction Amounts
  var StandardDeduction; // Standard or Itemized Deduction
  if (filingStatus = "Single";) {StandardDeduction = 12000;}
  else if (filingStatus = "MFJ";) {StandardDeduction = 24000;}
  else if (filingStatus = "MFS";) {StandardDeduction = 24000;}
  else if (filingStatus = "HoH";) {StandardDeduction = 18000;}
  else if (filingStatus = "QW";) {StandardDeduction = 12000;}
  else {StandardDeduction = undefined;} // Filing Status Error

  // Get Income Amounts from user input
  var form1040line7 = document.getElementById("form1040line7").value; // Wages
  var form1040line9 = document.getElementById("form1040line9").value; // Diviends
  var form1040line12 = document.getElementById("form1040line12").value; // Self-Employment
  var form1040line13 = document.getElementById("form1040line13").value; // Capital Gains
  var form1040line17 = document.getElementById("form1040line17").value; // Rental, Partnership, and S-Corporation Income
  var form1040AllOtherIncome = document.getElementById("form1040AllOtherIncome").value; // All Other Income

  // Add Total Income from user input
  var form1040line22 = form1040line7 + form1040line9 + form1040line12 + form1040line13 + form1040line17 + form1040AllOtherIncome;

  // Get Deduction Amounts from user input
  var form1040line36 = document.getElementById("form1040line36").value; // AGI Deductions: Numerator of Pie Percentage
  var ItemizedDeductions = document.getElementById("ItemizedDeductions").value; // Itemzied Deductions
  // Determine Higher Standard Deduction or Itemized Deduction
  var form1040line40 = Math.max(StandardDeduction, ItemizedDeductions);

  // Calculate Taxable Income
  var form1040line43 = form1040line22 - form1040line40; // Taxable Income: Numerator of Pie Percentage

  // Calcualte Tax
  var form1040line44 = calculateTax(filingStatus, form1040line43);  // Tax: Numerator of Pie Percentage
  // Calcualte Self Employment Tax
  var SelfEmploymentTax = 0;
  if (form1040line12 <= 128400) // Self-Employment Limit for 2018
  {
    SelfEmploymentTax = form1040line12 * .153;;
  }
  else {
    SelfEmploymentTax = (form1040line12 * .029) + 15921.50; // Self-Employment Tax Maximum for 2018
  }
  form1040line44 = form1040line44 + SelfEmploymentTax; // Add Self Employment Tax

  // Calcualte Tax Figures as Percentages of Income
  var RemainingIncome = Math.round( (form1040line43/form1040line22) * 100 ) - Math.round( (form1040line44/form1040line22) * 100 );
  var DeductionsPercentage = Math.round( (form1040line40/form1040line22) * 100 );
  var FederalTaxPercentage = Math.round( (form1040line44/form1040line22) * 100 );

  // Create Array
  var taxPieSummary = [];

  // Push Tax Information into Array as Percentages
  taxPieSummary.push({
    "slice":"Remaining Income",
    "value":RemainingIncome
  });
  taxPieSummary.push({
    "slice":"Deductions",
    "value":DeductionsPercentage
  });
  taxPieSummary.push({
    "slice":"Federal Tax",
    "value":FederalTaxPercentage
  });

  drawPieChart(taxPieSummary);

  function drawPieChart(data) {

    // set up margins
    var el = d3.select('.pie'),
        elWidth = parseInt(el.style('width'), 10),
        elHeight = parseInt(el.style('height'), 10),
        margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = elWidth - margin.left - margin.right,
        height = elHeight - margin.top - margin.bottom;

    // create svg element
    var svg = el.append("svg")
        .attr("width", elWidth)
        .attr("height", elHeight)
       .append("g")
        .attr("transform", "translate(" + elWidth/2 + "," + elHeight/2 + ")");

      data.forEach(function(d) {
        d.value = +d.value;
      });

      // arc
      var radius = Math.min(width, height) / 2 + 20;
      var arc = d3.svg.arc()
                  .innerRadius(radius)
                  .outerRadius(radius * 0.55);

      function arcTween(a) {
        // see: http://bl.ocks.org/mbostock/1346410
        var i = d3.interpolate(this._current, a);
        this._current = i(0);
        return function(t) {
          return arc(i(t));
        };
      }

      // pie function
      var pie = d3.layout.pie()
        .value(function(d) {
          return d.value;
        });

      // set up the arcs
      var arcs = svg.selectAll(".arc")
        .data(pie(data));

      // Set color for pie chart
      var color = [
        '#c6dbef', // Remaining Income
        '#9ecae1', // Deductions
        '#e6550d'  // Tax
      ];

      // transition new data
      arcs.enter().append('path')
        .attr('class', 'arc')
        .attr('fill', function (d, i) { return color[i]; })
        .each(function (d) { this._current = { startAngle: 0, endAngle: 0}; });

      // animate the data
      arcs.transition().duration(3000).attrTween('d', arcTween)
        .each('end', function(d) {
          var translate = arc.centroid(d);
          svg.append("text")
               .attr("transform", 'translate(' + translate + ')')
               .attr("dy", "-0.4em")
               .style("text-anchor", "middle")
               .text(function() {
                 return d.data.value + '%';
               });

           // Text of slice
           svg.append("text")
                .attr("transform", 'translate(' + translate + ')')
                .attr("dy", "1.3em")
                .style("text-anchor", "middle")
                .text(function() {
                  return d.data.slice
                });
        });

  }

}
