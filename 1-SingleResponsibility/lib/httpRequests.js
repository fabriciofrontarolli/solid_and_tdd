const axios = require('axios')

async function getBrazilianQuotation() {
  const brazilianQuotation = await axios.get('http://localhost:15000/exchange/getQuotation/BRL')
                                  .then((response) => {
                                    return response.data
                                  });
  return brazilianQuotation;
}

module.exports.getBrazilianQuotation = getBrazilianQuotation;
