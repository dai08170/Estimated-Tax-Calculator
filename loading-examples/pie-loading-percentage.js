(function() {
  'use strict';

  // set up margins
  var el = d3.select('.percentage'),
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

  // Get infomration from .json file
  d3.json("/loading-examples/loading-example-percentage.json", function(error, data) {
    data.forEach(function(d) {
      d.value = +d.value;
    });
    visualizePercentage(data);
  });

  function visualizePercentage(data) {

    // arc
    var radius = Math.min(width, height) / 2 + 20;
    var arc = d3.svg.arc()
                .innerRadius(radius)
                .outerRadius(radius * 0);

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
    arcs.transition().duration(2000).attrTween('d', arcTween)
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
                return d.data.slice;
              });
      });
  }

}());
