function exchangeInsideRateLimit(dollarQuotation, targetCurrency) {
  // Validate if quotation is not higher than the exchanger rate limit - Rate Limit is 4
  if (dollarQuotation > targetCurrency.rateLimit) {
    throw new Error(`Sorry! Our rate limit to exchange is ${targetCurrency.rateLimit}`);
  }
}

module.exports.exchangeInsideRateLimit = exchangeInsideRateLimit;
