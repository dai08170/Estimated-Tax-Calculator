/*
    Calculates Federal Income Tax for Individuals for the 2018 year (Form 1040, Line 44)
    with Filing Status (Lines 1-5) and Taxable Income (Line 43) as parameters.
    This is a simple calcualtion using tax brackets and does not consider
    certian capital gain and other income subject to special tax rates.
*/

function calculateTax(filingStatus, taxableIncome){

var tax = 0; // Initialize tax to $0

switch(filingStatus) {

    // Single
    case "Single":
        /*
        Single Tax Rates (2018):
        10% on taxable income from $0 to $9,525,
        12% on taxable income from $9,525 to $38,700, plus $952.50
        22% on taxable income from $37,700 to $82,500, plus $4,453.50
        24% on taxable income from $82,500 to $157,500 plus $14,089.50
        32% on taxable income from $157,500 to $200,000, plus $32,089.50
        35% on taxable income from $200,000 to $500,000, plus $45,689.50
        37% on taxable income from $500,00 or higher, plus $150,689.50
        */
        if(taxableIncome <= 0){
          tax = 0;
        }
        else if (taxableIncome > 0 && taxableIncome <= 9525) {
          tax = taxableIncome * 0.10;
        }
        else if (taxableIncome > 9525 && taxableIncome <= 38700) {
          tax = (taxableIncome - 9525) * 0.12 + 952.50;
        }
        else if (taxableIncome > 37700 && taxableIncome <= 82500) {
          tax = (taxableIncome - 37700) * 0.22 + 4453.50;
        }
        else if (taxableIncome > 82500 && taxableIncome <= 157500) {
          tax = (taxableIncome - 82500) * 0.24 + 14089.50;
        }
        else if (taxableIncome > 157500 && taxableIncome <= 200000) {
          tax = (taxableIncome - 157500) * 0.32 + 32089.50;
        }
        else if (taxableIncome > 200000 && taxableIncome <= 500000) {
          tax = (taxableIncome - 200000) * 0.35 + 45689.50;
        }
        else if (taxableIncome > 500000) {
          tax = (taxableIncome - 500000) * 0.37 + 150689.50;
        }
        else {
          tax = undefined; // Taxable Income or Filing Status Error
        }
        break;

    // Married Filing Joint
    case "MFJ":
        /*
        Married Filing Joint Tax Rates (2018):
        10% on taxable income from $0 to $19,050,
        12% on taxable income from $19,050 to $77,400, plus $1,905
        22% on taxable income from $77,400 to $165,000, plus $8,907
        24% on taxable income from $165,000 to $315,000, plus $28,179
        32% on taxable income from $315,000 to $400,000, plus $64,179
        35% on taxable income from $400,000 to $600,000, plus $91,379
        37% on taxable income from $600,000 or higher, plus $161,379
        */
        if(taxableIncome <= 0){
          tax = 0;
        }
        else if (taxableIncome > 0 && taxableIncome <= 19050) {
          tax = taxableIncome * 0.10;
        }
        else if (taxableIncome > 19050 && taxableIncome <= 77400) {
          tax = (taxableIncome - 19050) * 0.12 + 1905;
        }
        else if (taxableIncome > 77400 && taxableIncome <= 165000) {
          tax = (taxableIncome - 77400) * 0.22 + 8907;
        }
        else if (taxableIncome > 165000 && taxableIncome <= 315000) {
          tax = (taxableIncome - 165000) * 0.24 + 28179;
        }
        else if (taxableIncome > 315000 && taxableIncome <= 400000) {
          tax = (taxableIncome - 315000) * 0.32 + 64179;
        }
        else if (taxableIncome > 400000 && taxableIncome <= 600000) {
          tax = (taxableIncome - 400000) * 0.35 + 91379;
        }
        else if (taxableIncome > 600000) {
          tax = (taxableIncome - 600000) * 0.37 + 161379;
        }
        else {
          tax = undefined; // Taxable Income or Filing Status Error
        }
        break;

    // Married Filing Separately
    case "MFS":
        /*
        Married Filing Separately Tax Rates (2018):
        10% on taxable income from $0 to $9,525,
        12% on taxable income from $9,525 to $38,700, plus $952.50
        22% on taxable income from $37,700 to $82,500, plus $4,453.50
        24% on taxable income from $82,500 to $157,500 plus $14,089.50
        32% on taxable income from $157,500 to $200,000, plus $32,089.50
        35% on taxable income from $200,000 to $300,000, plus $45,689.50
        37% on taxable income from $300,00 or higher, plus $80,689.50
        */
        if(taxableIncome <= 0){
          tax = 0;
        }
        else if (taxableIncome > 0 && taxableIncome <= 9525) {
          tax = taxableIncome * 0.10;
        }
        else if (taxableIncome > 9525 && taxableIncome <= 37700) {
          tax = (taxableIncome - 9525) * 0.12 + 952.50;
        }
        else if (taxableIncome > 37700 && taxableIncome <= 82500) {
          tax = (taxableIncome - 37700) * 0.22 + 4453.50;
        }
        else if (taxableIncome > 82500 && taxableIncome <= 157500) {
          tax = (taxableIncome - 82500) * 0.24 + 14089.50;
        }
        else if (taxableIncome > 157500 && taxableIncome <= 200000) {
          tax = (taxableIncome - 157500) * 0.32 + 32089.50;
        }
        else if (taxableIncome > 200000 && taxableIncome <= 300000) {
          tax = (taxableIncome - 200000) * 0.35 + 45689.50;
        }
        else if (taxableIncome > 300000) {
          tax = (taxableIncome - 300000) * 0.37 + 80689.50;
        }
        else {
          tax = undefined; // Taxable Income or Filing Status Error
        }
        break;

    case "HoH": // Head of Household
        /*
        Head of Household Tax Rates (2018):
        10% on taxable income from $0 to $13,600,
        12% on taxable income from $13,600 to $51,800, plus $1,360
        22% on taxable income from $51,800 to $82,500, plus $5,944
        24% on taxable income from $82,500 to $157,500, plus $12,698
        32% on taxable income from $157,500 to $200,000, plus $30,698
        35% on taxable income from $200,000 to $500,000, plus $44,298
        37% on taxable income from $500,000 or higher, plus $149,298
        */
        if(taxableIncome <= 0){
          tax = 0;
        }
        else if (taxableIncome > 0 && taxableIncome <= 13600) {
          tax = taxableIncome * 0.10;
        }
        else if (taxableIncome > 13600 && taxableIncome <= 51800) {
          tax = (taxableIncome - 13600) * 0.12 + 1360;
        }
        else if (taxableIncome > 51800 && taxableIncome <= 82500) {
          tax = (taxableIncome - 51800) * 0.22 + 5944;
        }
        else if (taxableIncome > 82500 && taxableIncome <= 157500) {
          tax = (taxableIncome - 82500) * 0.24 + 12698;
        }
        else if (taxableIncome > 157500 && taxableIncome <= 200000) {
          tax = (taxableIncome - 157500) * 0.32 + 30698;
        }
        else if (taxableIncome > 200000 && taxableIncome <= 500000) {
          tax = (taxableIncome - 200000) * 0.35 + 44298;
        }
        else if (taxableIncome > 500000) {
          tax = (taxableIncome - 500000) * 0.37 + 149298;
        }
        else {
          tax = undefined; // Taxable Income or Filing Status Error
        }
        break;

    // Qualified Widow(er)
    case "QW":
        /*
        Qualified Widow(er) Tax Rates (2018): [Same as Married Filing Joint]
        10% on taxable income from $0 to $19,050,
        12% on taxable income from $19,050 to $77,400, plus $1,905
        22% on taxable income from $77,400 to $165,000, plus $8,907
        24% on taxable income from $165,000 to $315,000, plus $28,179
        32% on taxable income from $315,000 to $400,000, plus $64,179
        35% on taxable income from $400,000 to $600,000, plus $91,379
        37% on taxable income from $600,000 or higher, plus $161,379
        */
        if(taxableIncome <= 0){
          tax = 0;
        }
        else if (taxableIncome > 0 && taxableIncome <= 19050) {
          tax = taxableIncome * 0.10;
        }
        else if (taxableIncome > 19050 && taxableIncome <= 77400) {
          tax = (taxableIncome - 19050) * 0.12 + 1905;
        }
        else if (taxableIncome > 77400 && taxableIncome <= 165000) {
          tax = (taxableIncome - 77400) * 0.22 + 8907;
        }
        else if (taxableIncome > 165000 && taxableIncome <= 315000) {
          tax = (taxableIncome - 165000) * 0.24 + 28179;
        }
        else if (taxableIncome > 315000 && taxableIncome <= 400000) {
          tax = (taxableIncome - 315000) * 0.32 + 64179;
        }
        else if (taxableIncome > 400000 && taxableIncome <= 600000) {
          tax = (taxableIncome - 400000) * 0.35 + 91379;
        }
        else if (taxableIncome > 600000) {
          tax = (taxableIncome - 600000) * 0.37 + 161379;
        }
        else {
          tax = undefined; // Taxable Income or Filing Status Error
        }
        break;

    // Filing Status Error
    default:
        tax = undefined;
}

return tax;

}
