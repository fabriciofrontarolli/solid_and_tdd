const httpRequests = require('./lib/httpRequests')
const validations = require('./lib/validations')
const exchange = require('./lib/exchange')


async function exchangeCurrencyToDollar(amount, targetCurrency) {

  const targetExchangeStrategy = exchange.buildTargetExchanger(targetCurrency);

  const quotation = await httpRequests.getQuotation(targetExchangeStrategy.currency);

  validations.exchangeInsideRateLimit(quotation.dollarQuotation, targetExchangeStrategy);

  const exchangedValue = exchange.exchangeDollarToCurrency(amount, quotation.dollarQuotation);

  return exchangedValue;
}





/* Usage Test */
async function usageExchangeCurrencyToDollar(amountInDollars, targetCurrency) {
  const exchangedValue = await exchangeCurrencyToDollar(amountInDollars, targetCurrency);

  console.log(`${amountInDollars} converted to ${targetCurrency} : ${exchangedValue}`);
}

usageExchangeCurrencyToDollar(100, 'EUR');

usageExchangeCurrencyToDollar(100, 'BRL')
.catch((error) => {
  console.log(error);
})
