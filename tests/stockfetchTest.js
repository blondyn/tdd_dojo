var assert = require('assert');
var stockfetch = require('../stockfetch');

describe('End to end test', function() {
    it('should work', function () {

        var fileReader = function(filename) {
            return ['foo', 'bar'];
        };
        var tickerPricesGetter = function(tickers) {
            return tickers.map(function (cb, index) {
                return index;
            });
        };

        var output = stockfetch('test', fileReader, tickerPricesGetter);
        tickers = output[0]; prices = output[1];

        assert.deepEqual(['foo', 'bar'], tickers);
        assert.deepEqual([0, 1], prices);
    });
});
