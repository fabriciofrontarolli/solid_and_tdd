const httpRequests = require('./lib/httpRequests')
const validations = require('./lib/validations')
const exchange = require('./lib/exchange')


async function exchangeCurrencyToDollar(amount) {
  const brazilianQuotation = await httpRequests.getBrazilianQuotation();

  validations.exchangeInsideRateLimit(brazilianQuotation.dollarQuotation);

  const exchangedValue = exchange.exchangeDollarToCurrency(amount, brazilianQuotation.dollarQuotation);

  return exchangedValue;
}





/* Usage Test */
async function usageExchangeCurrencyToDollar() {
  const amountInDollars = 100;
  const exchangedValue = await exchangeCurrencyToDollar(amountInDollars);

  console.log(`${amountInDollars} converted to BRL : ${exchangedValue}`);
}

usageExchangeCurrencyToDollar();
