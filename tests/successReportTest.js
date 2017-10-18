var assert = require('assert');
require('co-mocha');
var successReportGenerator = require('../lib/successReportGenerator');

describe('Success report', function () {
    it('should be generated with sorted desc', function *() {
        const input = [['A', 100], ['B', 33], ['C', 120]];

        const result = successReportGenerator(input);

        assert.deepEqual(result, [['C', 120], ['A', 100], ['B', 33]])

    });
});
