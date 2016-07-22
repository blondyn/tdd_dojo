var assert = require('assert');
var path = require('path');

describe('ticker reader test', function() {
    it('should work', function () {
        var tickerReader = require('../tickerReader');

        var expected = ['foo', 'bar'];

        return tickerReader(path.join(__dirname, 'testFile')).then(function(actual) {
            assert.deepEqual(expected, actual);
        });
    });
});
