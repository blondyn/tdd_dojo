var assert = require('assert');

describe('End to end test', function() {
    it('should work', function () {
        var stockfetch = require('../stockfetch');

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


        return stockfetch('./test', fileReader, tickerPricesGetter).then(function(prices) {
            assert.deepEqual(prices, [0,1]);
        });
    });
});
