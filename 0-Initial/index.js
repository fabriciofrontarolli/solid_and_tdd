const axios = require('axios')

// Converts a given amount of Dollars to Brazilian Real
async function exchangeCurrencyToDollar(amount) {
  const BrazilianQuotation = await axios.get('http://localhost:15000/exchange/getQuotation/BRL')
                                  .then((response) => {
                                    return response.data
                                  });

  // Validate if quotation is not higher than the exchanger rate limit - Rate Limit is 4
  if (BrazilianQuotation.dollarQuotation > 5) {
    throw new Error('Sorry! Our rate limit to exchange is 5');
  }

  const exchangedValue = (amount * BrazilianQuotation.dollarQuotation);

  return exchangedValue;
}





/* Usage Test */
async function usageExchangeCurrencyToDollar() {
  const amountInDollars = 100;
  const exchangedValue = await exchangeCurrencyToDollar(amountInDollars);

  console.log(`${amountInDollars} converted to BRL : ${exchangedValue}`);
}

usageExchangeCurrencyToDollar();
