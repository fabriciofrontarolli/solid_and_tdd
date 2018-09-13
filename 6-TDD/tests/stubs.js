module.exports = {

  'axios': {
    get: async (url) => {
      const splittedUrl = url.split('/');
      const targetCurrencyFromUrl = splittedUrl[splittedUrl.length - 1];

      /* Return mocked quotations */
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

      return {
        data: quotations.find(c => c.currency === targetCurrencyFromUrl)
      }
    }
  }

}
