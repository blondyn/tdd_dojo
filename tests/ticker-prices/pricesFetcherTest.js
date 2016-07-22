var assert = require('assert');
require('co-mocha');

const SRC = '../../lib/ticker-prices/';
const pricesFetcherFactory = require(SRC + 'pricesFetcher');

describe('tickerPrices test', function () {
    it('should pass', function *() {
        const baseUrl = "http://example.net";

        const request = function(fullUrl) {
            const lut = {
                "A": 1,
                "B": 2,
                "C": 3
            };
            var lastChar = fullUrl[fullUrl.length - 1];
            return Promise.resolve(lut[lastChar]);
        };

        const pricesFetcher = pricesFetcherFactory(request, baseUrl);
        const prices = yield pricesFetcher(['A', 'B', 'C']);

        assert.deepEqual(prices, [1,2, 3]);
    })
});
