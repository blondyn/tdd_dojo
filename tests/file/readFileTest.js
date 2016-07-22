var assert = require('assert');
var path = require('path');
require('co-mocha');

const SRC = '../../lib/file/';

describe('readFile test', function () {
    it('should invoke real fs and read successfully', function *() {
        const fsStub = {
                readFile: function(path, enc, cb) {
                    cb(null, 'foo\nbar\n');
                }
        };
        const readFile = require(SRC + 'readFile')(fsStub);

        const actual = yield readFile(path.join(__dirname, 'testFile'));
        assert.equal(typeof actual, 'string');
        assert.deepEqual('foo\nbar\n', actual);
    });

    it('should throw with proper message when file not found', function *() {
        const fsStub = {
            readFile: function(path, enc, cb) {
                cb(new Error("Meaningless error"));
            }
        };
        const readFile = require(SRC + 'readFile')(fsStub);

        try {
            yield readFile('notexisting');

            throw Error('This should not pass');
        } catch (e) {
            assert.equal("Meaningless error", e.message);
        }
    });
});
