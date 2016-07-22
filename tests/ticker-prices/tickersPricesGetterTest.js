var assert = require('assert');
require('co-mocha');

const SRC = '../../lib/ticker-prices/';
const tickerPricesGetterFactory = require(SRC + 'tickerPricesGetter');

describe('tickerPrices test', function () {
    it('should pass', function *() {
        const fetcher = function(tickers) {
            assert.deepEqual(tickers, ['A', 'B', 'C']);
            return Promise.resolve([0,1,2]);
        };

        var dummyFormatter = function(input) { return input };
        const tickerPricesGetter = tickerPricesGetterFactory(fetcher, dummyFormatter);

        const tickerNames = ['A', 'B', 'C'];
        const result = yield tickerPricesGetter(tickerNames);

        assert.deepEqual(result, [['A', 0], ['B', 1], ['C', 2]]);
    })
});
