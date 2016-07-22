var assert = require('assert');
var path = require('path');

const ticker = require('../tickerExtractor')([]);
describe('tickerExtractor test', function () {
    it('should return input as an array', function (done) {
        var inputStream = 'foo\nbar\n';

        const actual = ticker(inputStream);

        var expected = ['foo', 'bar'];
        assert.deepEqual(expected, actual);

        done();
    });

    it('should filter out empty items', function (done) {
        var inputStream = 'foo\n\n';

        const actual = ticker(inputStream);

        var expected = ['foo'];
        assert.deepEqual(expected, actual);

        done();
    });

    it('should filter out empty items', function (done) {
        const tickerWithBlacklist = require('../tickerExtractor')(['INVALID']);
        var inputStream = 'foo\nINVALID\n';

        const actual = tickerWithBlacklist(inputStream);

        var expected = ['foo'];
        assert.deepEqual(expected, actual);

        done();
    });
});
