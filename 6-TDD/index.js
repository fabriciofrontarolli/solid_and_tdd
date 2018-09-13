const httpRequests = require('./lib/httpRequests')
const validations = require('./lib/validations')
const exchange = require('./lib/exchange')
const axios = require('axios')

async function exchangeCurrency(amount, targetCurrency) {

  const targetExchangeStrategy = exchange.buildTargetExchanger(targetCurrency);

  const quotation = await httpRequests.getQuotation(axios, targetExchangeStrategy.currency);

  validations.exchangeInsideRateLimit(quotation.dollarQuotation, targetExchangeStrategy);

  const exchangedValue = exchange.exchangeDollarToCurrency(amount, quotation.dollarQuotation);

  return exchangedValue;
}

module.exports.handler = exchangeCurrency;
