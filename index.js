const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const quotations = [
  {
    id: 1,
    currency: 'BRL',
    name: 'Brazilian Reais',
    dollarQuotation: 4.10
  },
  {
    id: 2,
    currency: 'EUR',
    name: 'Euro',
    dollarQuotation: 0.85
  }
];

app.get('/exchange/getQuotation', (request, response) => {
  console.log('REST API was invoked');
  response.send(quotations)
});

app.get('/exchange/getQuotation/:currency', (request, response) => {
  const { currency } = request.params;
  const targetCurrency = quotations.find(cr => cr.currency === currency);
  response.send(targetCurrency)
});

app.listen(15000, () => {
  console.log('Currency Exchange API listening on port 15000');
});
