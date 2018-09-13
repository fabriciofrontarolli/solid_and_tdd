function exchangeDollarToCurrency(dollarAmount, currencyDollarQuotation) {
  const exchangedValue = (dollarAmount * currencyDollarQuotation);
  return Math.round(exchangedValue);
}

function buildTargetExchanger(targetCurrency) {
  switch (targetCurrency) {
    case 'BRL': {
      return {
        rateLimit: 4,
        currency: 'BRL'
      }
      break;
    }
    case 'EUR': {
      return {
        rateLimit: 3,
        currency: 'EUR'
      }
      break;
    }
  }
}

module.exports = {
  exchangeDollarToCurrency,
  buildTargetExchanger
}
