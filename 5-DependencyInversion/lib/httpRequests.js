async function getQuotation(RestRequester, targetCurrency) {
  const currencyQuotation = await RestRequester.get(`http://localhost:15000/exchange/getQuotation/${targetCurrency}`)
                                  .then((response) => {
                                    return response.data
                                  });
  return currencyQuotation;
}

module.exports.getQuotation = getQuotation;
