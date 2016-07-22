var assert = require('assert');
var path = require('path');
require('co-mocha');

describe('ticker reader test', function () {
    it('should read testFile successfully', function *() {
        var fsStub = function(filename) {
            return {
                readFile: function(filename, charset, cb) {
                    assert(filename.endsWith("tests/testFile"));

                    var stubbedFileContent = 'foo\nbar\n';

                    cb(null, stubbedFileContent);
                }
            }
        }();

        var tickerReader = require('../tickerReader')(fsStub);

        var expected = ['foo', 'bar'];

        var actual = yield tickerReader(path.join(__dirname, 'testFile'));
        assert.deepEqual(expected, actual);
    });
});
