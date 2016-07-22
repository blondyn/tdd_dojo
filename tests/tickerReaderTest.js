var assert = require('assert');
var path = require('path');

describe('ticker reader test', function() {
    it('should read testFile successfully', function () {
        var fsStub = function(filename) {
            return {
                readFile: function(filename, charset, cb) {
                    var stubbedFileContent = 'foo\nbar\n';

                    cb(null, stubbedFileContent);
                }
            }
        }();

        var tickerReader = require('../tickerReader')(fsStub);

        var expected = ['foo', 'bar'];

        return tickerReader(path.join(__dirname, 'testFile')).then(function(actual) {
            assert.deepEqual(expected, actual);
        });
    });
});
