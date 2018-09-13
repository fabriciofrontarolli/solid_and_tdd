const chai = require('chai')
const { assert, expect } = chai
const proxyquire = require('proxyquire');

const stubs = require('./stubs')

/* Code Under Test */
const {
  exchangeDollarToCurrency,
  buildTargetExchanger
} = require('../lib/exchange')

const { exchangeInsideRateLimit } = require('../lib/validations')
const { getQuotation } = require('../lib/httpRequests')

describe('Currency Exchanger', () => {

  describe('lib', () => {
    describe('exchange', () => {

      it('exchangeDollarToCurrency - Should correctly calculate exchange', () => {
        const dollarAmount = 100;
        const currencyDollarQuotation = 4.10;

        const valueExchanged = exchangeDollarToCurrency(dollarAmount, currencyDollarQuotation);

        expect(valueExchanged).to.equal(410)
      })

      it('buildTargetExchanger - Should correctly build an exchanger for the target currency', () => {
        const targetCurrency = 'BRL'
        const exchangeStrategy = buildTargetExchanger(targetCurrency);

        expect(exchangeStrategy.currency).to.equal(targetCurrency);
      })

    })

    describe('validations', () => {
      it('exchangeInsideRateLimit - Should not throw if quotation is below rate limit', () => {
        const dollarQuotation = 3;
        const targetCurrency = { rateLimit: 4 }

        /* If the function has arguments, wrap it inside another function to assert */
        expect(function() { exchangeInsideRateLimit(dollarQuotation, targetCurrency) }).not.to.throw()
      })

      it('exchangeInsideRateLimit - Should throw if quotation is below rate limit', () => {
        const dollarQuotation = 4.10;
        const targetCurrency = { rateLimit: 4 }

        /* If the function has arguments, wrap it inside another function to assert */
        expect(function() { exchangeInsideRateLimit(dollarQuotation, targetCurrency) }).to.throw()
      })
    })

    describe('httpRequests', () => {
      it('getQuotation - Should successfully return data from response', async () => {
        const targetCurrency = 'BRL'
        const restRequester = {
          get: async () => {
            return {
              data: 'MOCKED DATA'
            }
          }
        }

        const responseData = await getQuotation(restRequester, targetCurrency)

        expect(responseData).to.equal('MOCKED DATA')
      })
    })

  })

  describe('Handler', () => {
    it('Should successfully convert 100 dollars to Brazilian Real', async () => {
      const CurrencyExchanger = proxyquire('../index', stubs)

      const exchangedValue = await CurrencyExchanger.handler(100, 'EUR');

      expect(exchangedValue).to.equal(85)
    })
  })
})
