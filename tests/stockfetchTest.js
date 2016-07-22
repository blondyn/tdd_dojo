var assert = require('assert');
require('co-mocha');

describe('Stockfetch end to end test', function () {
    it('should work', function *() {

        var fileReader = function(filename) {
            assert(filename, './test');
            return Promise.resolve(['foo', 'bar']);
        };

        var tickerPricesGetter = function(tickers) {
            var prices = tickers.map(function (cb, index) {
                return index;
            });

            assert.deepEqual(tickers, ['foo', 'bar']);
            return Promise.resolve(prices);
        };

        var stockfetch = require('../stockfetch');

        var prices = yield stockfetch('./test', fileReader, tickerPricesGetter);
        assert.deepEqual(prices, [0,1]);
    });
});
