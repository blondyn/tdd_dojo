var assert = require('assert');

describe('ticker reader test', function() {
    it('should work', function () {
        var tickerReader = require('../tickerReader');

        var expected = ['foo', 'bar'];

        return tickerReader('tests/testFile').then(function(actual) {
            assert.deepEqual(expected, actual);
        });
    });
});
