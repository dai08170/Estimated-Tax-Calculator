/*
    Calculates Federal Income Tax for Individuals for the 2015 year (Form 1040, Line 44)
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
        Single Tax Rates (2015):
        10% on taxable income from $0 to $9,225,
        15% on taxable income from $9,226 to $37,450, plus $922.50
        25% on taxable income from $37,451 to $90,750, plus $5,156.25
        28% on taxable income from $90,751 to $189,300, plus $18,481.25
        33% on taxable income from $189,301 to $411,500, plus $46,075.25
        35% on taxable income from $411,501 to $413,200, plus $119,401.25
        39.6% on taxable income from $413,201 or higher, plus $119,996.25
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
        else if (taxableIncome > 37450 && taxableIncome <= 90750) {
          tax = (taxableIncome - 37450) * 0.25 + 5156.25;
        }
        else if (taxableIncome > 90750 && taxableIncome <= 189300) {
          tax = (taxableIncome - 90750) * 0.28 + 18481.25;
        }
        else if (taxableIncome > 189300 && taxableIncome <= 411500) {
          tax = (taxableIncome - 189300) * 0.33 + 46075.25;
        }
        else if (taxableIncome > 411500 && taxableIncome <= 413200) {
          tax = (taxableIncome - 411500) * 0.35 + 119401.25;
        }
        else if (taxableIncome > 413200) {
          tax = (taxableIncome - 413200) * 0.396 + 119996.25;
        }
        else {
          tax = undefined; // Taxable Income or Filing Status Error
        }
        break;

    // Married Filing Joint
    case "MFJ":
        /*
        Married Filing Joint Tax Rates (2015):
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
        Married Filing Separately Tax Rates (2015):
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
        Qualifying Widower Tax Rates (2015) [Same as Married Filing Joint]:
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
