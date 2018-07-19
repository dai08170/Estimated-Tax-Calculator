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
        12% on taxable income from $9,226 to $37,700, plus $922.50
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
        else if (taxableIncome > 9525 && taxableIncome <= 37700) {
          tax = (taxableIncome - 9525) * 0.12 + 922.50;
        }
        else if (taxableIncome > 37700 && taxableIncome <= 82500) {
          tax = (taxableIncome - 37700) * 0.22 + 4453.50;
        }
        else if (taxableIncome > 82500 && taxableIncome <= 157500) {
          tax = (taxableIncome - 82500) * 0.24 + 14,089.50;
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
        10% on taxable income from $0 to $18,450,
        15% on taxable income from $18,451 to $74,900, plus $1,845
        25% on taxable income from $74,901 to $151,200, plus $10,312.50
        28% on taxable income from $151,201 to $230,450, plus $29,387.50
        33% on taxable income from $231,451 to $411,500, plus $51,577.50
        35% on taxable income from $411,501 to $464,850, plus $111,324
        39.6% on taxable income from $464,851 or higher, plus $129,996.50
        */
        if(taxableIncome <= 0){
          tax = 0;
        }
        else if (taxableIncome > 0 && taxableIncome <= 18450) {
          tax = taxableIncome * 0.10;
        }
        else if (taxableIncome > 18450 && taxableIncome <= 74900) {
          tax = (taxableIncome - 18450) * 0.15 + 1845;
        }
        else if (taxableIncome > 74900 && taxableIncome <= 151200) {
          tax = (taxableIncome - 74900) * 0.25 + 10312.50;
        }
        else if (taxableIncome > 151200 && taxableIncome <= 230450) {
          tax = (taxableIncome - 151200) * 0.28 + 29387.50;
        }
        else if (taxableIncome > 230450 && taxableIncome <= 411500) {
          tax = (taxableIncome - 231450) * 0.33 + 51577.50;
        }
        else if (taxableIncome > 411500 && taxableIncome <= 464850) {
          tax = (taxableIncome - 411500) * 0.35 + 111324;
        }
        else if (taxableIncome > 464850) {
          tax = (taxableIncome - 464850) * 0.396 + 129996.50;
        }
        else {
          tax = undefined; // Taxable Income or Filing Status Error
        }
        break;

    // Married Filing Separately
    case "MFS":
        /*
        Married Filing Separately Tax Rates (2018):
        10% on taxable income from $0 to $9,225,
        15% on taxable income from $9,226 to $37,450, plus $922.50
        25% on taxable income from $37,451 to $75,600, plus $5,156.25
        28% on taxable income from $75,601 to $115,255, plus $14,693
        33% on taxable income from $115,226 to $205,750, plus $25,788.75
        35% on taxable income from $205,751 to $232,435, plus $55,562
        39.6% on taxable income from $232,426 or higher, plus $64,998.25
        */
        if(taxableIncome <= 0){
          tax = 0;
        }
        else if (taxableIncome > 0 && taxableIncome <= 9225) {
          tax = taxableIncome * 0.10;
        }
        else if (taxableIncome > 9225 && taxableIncome <= 37450) {
          tax = (taxableIncome - 9225) * 0.15 + 922.50;
        }
        else if (taxableIncome > 37450 && taxableIncome <= 75600) {
          tax = (taxableIncome - 37450) * 0.25 + 5156.25;
        }
        else if (taxableIncome > 75600 && taxableIncome <= 115255) {
          tax = (taxableIncome - 75600) * 0.28 + 14693;
        }
        else if (taxableIncome > 115255 && taxableIncome <= 205750) {
          tax = (taxableIncome - 115255) * 0.33 + 25788.75;
        }
        else if (taxableIncome > 205750 && taxableIncome <= 232435) {
          tax = (taxableIncome - 205750) * 0.35 + 55562;
        }
        else if (taxableIncome > 232435) {
          tax = (taxableIncome - 232435) * 0.396 + 64998.25;
        }
        else {
          tax = undefined; // Taxable Income or Filing Status Error
        }
        break;

    case "HoH": // Head of Household
        /*
        Head of Household Tax Rates (2015):
        10% on taxable income from $0 to $13,150,
        15% on taxable income from $13,151 to $50,200, plus $1,315
        25% on taxable income from $50,201 to $129,600, plus $6,872.50
        28% on taxable income from $129,601 to $209,850, plus $26,772.50
        33% on taxable income from $209,851 to $411,500, plus $49,192.50
        35% on taxable income from $411,501 to $439,000, plus $115,737
        39.6% on taxable income from $439,001 or higher, plus $125,362
        */
        if(taxableIncome <= 0){
          tax = 0;
        }
        else if (taxableIncome > 0 && taxableIncome <= 13150) {
          tax = taxableIncome * 0.10;
        }
        else if (taxableIncome > 13150 && taxableIncome <= 50200) {
          tax = (taxableIncome - 13150) * 0.15 + 1315;
        }
        else if (taxableIncome > 50200 && taxableIncome <= 129600) {
          tax = (taxableIncome - 50200) * 0.25 + 6872.50;
        }
        else if (taxableIncome > 129600 && taxableIncome <= 209850) {
          tax = (taxableIncome - 129600) * 0.28 + 26772.50;
        }
        else if (taxableIncome > 209850 && taxableIncome <= 411500) {
          tax = (taxableIncome - 209850) * 0.33 + 49192.50;
        }
        else if (taxableIncome > 411500 && taxableIncome <= 439000) {
          tax = (taxableIncome - 411500) * 0.35 + 115737;
        }
        else if (taxableIncome > 439000) {
          tax = (taxableIncome - 439000) * 0.396 + 125362;
        }
        else {
          tax = undefined; // Taxable Income or Filing Status Error
        }
        break;

    case "QW": // Qualified Widow Same Tax Rates as MFJ
        /*
        Qualifying Widower Tax Rates (2018) [Same as Married Filing Joint]:
        10% on taxable income from $0 to $18,450,
        15% on taxable income from $18,451 to $74,900, plus $1,845
        25% on taxable income from $74,901 to $151,200, plus $10,312.50
        28% on taxable income from $151,201 to $230,450, plus $29,387.50
        33% on taxable income from $231,451 to $411,500, plus $51,577.50
        35% on taxable income from $411,501 to $464,850, plus $111,324
        39.6% on taxable income from $464,851 or higher, plus $129,996.50
        */
        if(taxableIncome <= 0){
          tax = 0;
        }
        else if (taxableIncome > 0 && taxableIncome <= 18450) {
          tax = taxableIncome * 0.10;
        }
        else if (taxableIncome > 18450 && taxableIncome <= 74900) {
          tax = (taxableIncome - 18450) * 0.15 + 1845;
        }
        else if (taxableIncome > 74900 && taxableIncome <= 151200) {
          tax = (taxableIncome - 74900) * 0.25 + 10312.50;
        }
        else if (taxableIncome > 151200 && taxableIncome <= 230450) {
          tax = (taxableIncome - 151200) * 0.28 + 29387.50;
        }
        else if (taxableIncome > 230450 && taxableIncome <= 411500) {
          tax = (taxableIncome - 231450) * 0.33 + 51577.50;
        }
        else if (taxableIncome > 411500 && taxableIncome <= 464850) {
          tax = (taxableIncome - 411500) * 0.35 + 111324;
        }
        else if (taxableIncome > 464850) {
          tax = (taxableIncome - 464850) * 0.396 + 129996.50;
        }
        else {
          tax = undefined; // Taxable Income or Filing Status Error
        }
        break;
    default:
        tax = undefined; // Filing Status Error
}

return tax;

}
