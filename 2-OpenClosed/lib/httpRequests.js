const axios = require('axios')

async function getQuotation(targetCurrency) {
  const currencyQuotation = await axios.get(`http://localhost:15000/exchange/getQuotation/${targetCurrency}`)
                                  .then((response) => {
                                    return response.data
                                  });
  return currencyQuotation;
}

module.exports.getQuotation = getQuotation;
