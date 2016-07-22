var assert = require('assert');
var path = require('path');
require('co-mocha');

describe('readFile test', function () {
    it('should invoke real fs and read successfully', function *() {
        var readFileStub = {
                readFile: function(path, enc, cb) {
                    cb(null, 'foo\nbar\n');
                }
        };
        var readFile = require('../readFile')(readFileStub);

        var actual = yield readFile(path.join(__dirname, 'testFile'));
        assert.equal(typeof actual, 'string');
        assert.deepEqual('foo\nbar\n', actual);
    });

    it('should throw with proper message when file not found', function *() {
        var readFileStub = {
            readFile: function(path, enc, cb) {
                cb(new Error("Meaningless error"));
            }
        };
        var readFile = require('../readFile')(readFileStub);

        try {
            yield readFile('notexisting');

            throw Error('This should not pass');
        } catch (e) {
            assert.equal("Meaningless error", e.message);
        }
    });
});
