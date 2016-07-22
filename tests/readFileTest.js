var assert = require('assert');
var path = require('path');
require('co-mocha');

var readFile = require('../readFile');
describe('readFile test', function () {
    it('should invoke real fs and read successfully', function *() {
        var actual = yield readFile(path.join(__dirname, 'testFile'));
        assert.equal(typeof actual, 'string');
        assert.deepEqual('foo\nbar\n', actual);
    });

    it('should throw with proper message when file not found', function *() {
        try {
            yield readFile('notexisting');

            throw Error('This should not pass');
        } catch (e) {
            assert.equal("ENOENT: no such file or directory, open 'notexisting'", e.message);
        }
    });
});
