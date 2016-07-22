var assert = require('assert');
var path = require('path');
require('co-mocha');

const SRC = '../../lib/file/';
describe('ticker reader test', function () {
    it('should read testFile successfully', function *() {
        var readFileStub = function(filename) {
            assert(filename.endsWith("tests/file/testFile"));
            return Promise.resolve('foo\nbar\n');
        };

        var tickerReader = require(SRC + 'tickerReader')(readFileStub);

        var expected = ['foo', 'bar'];

        var actual = yield tickerReader(path.join(__dirname, 'testFile'));
        assert.deepEqual(expected, actual);
    });
});
