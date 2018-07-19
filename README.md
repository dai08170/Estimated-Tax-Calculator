# Estimated-Tax-Calculator

Estimated Tax Calculator for individuals filing Form 1040, U.S. Individual Income Tax Return. This calculator should be used to estimate quarterly Federal income tax payments, based on [Current Tax Rate Schedules](https://www.irs.gov/pub/irs-pdf/f1040es.pdf).

![Dashboard](https://github.com/JohnnyUtah/Estimated-Tax-Calculator/blob/master/landing.png)

## Calculation

The calculation of tax computes amounts owed based on 2018 Income Tax Rates.

![Dashboard](https://github.com/JohnnyUtah/Estimated-Tax-Calculator/blob/master/2018-Tax-Rate-Schedules.png)

This tax calculation does not take into effect special Long Term Capital Gains and Qualified Dividends Tax Rates, nor additional taxes such as the Net Investment Income tax or Alternative Minimum Tax.  

## Live Version

Check out the live version of the calculator at http://calculator.pacifico.tax.

## Walkthrough

Get a video tour of how to use calculator at http://www.pacifico.tax/estimated-tax-calculator.

## Getting Started Locally

To run the application locally, make sure you have [Node](https://nodejs.org/en/) installed on your computer, and download the files. Goto the directory of the index.html file:

    $ ls
    $ cd Estimated-Tax-Calculator

Then type the following commands in a terminal:

    $ python -m SimpleHTTPServer 8000

Open a browser and goto you local host at http://localhost:8000/.

## Want to Contribute?

Are there additional features you would like to see? Interested is contributing to the project? Give me a shoutout at marcus@pacifico.tax.

## Disclaimer

This calculator is not intended to provide accounting, tax, or legal advice. Use this calculator at your own risk, and the results of the calculator do not guarantee your final tax liability. Please read our [Terms](http://www.pacifico.tax/terms/) for more information.

### Need Tax Preparation? Learn More About Us

Visit our company website, http://www.pacifico.tax, for further information about us, our tax consulting and tax preparation services.

### Visual Support

Thanks to [D3 (Data-Driven-Documents)](http://d3js.org), [Bootstrap](https://getbootstrap.com/), and [Ionicons](https://ionicons.com/) for their CSS.
