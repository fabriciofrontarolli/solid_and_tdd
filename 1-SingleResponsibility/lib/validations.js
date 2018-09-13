function exchangeInsideRateLimit(dollarQuotation) {
  // Validate if quotation is not higher than the exchanger rate limit - Rate Limit is 4
  if (dollarQuotation > 5) {
    throw new Error('Sorry! Our rate limit to exchange is 5');
  }
}

module.exports.exchangeInsideRateLimit = exchangeInsideRateLimit;
