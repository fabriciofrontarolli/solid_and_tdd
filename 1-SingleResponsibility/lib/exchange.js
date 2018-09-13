function exchangeDollarToCurrency(dollarAmount, currencyDollarQuotation) {
  const exchangedValue = (dollarAmount * currencyDollarQuotation);
  return exchangedValue;
}

module.exports.exchangeDollarToCurrency = exchangeDollarToCurrency;
