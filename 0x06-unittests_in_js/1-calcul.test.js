const assert = require('assert');
const { it, describe } = require("mocha");
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {

    it('should return 6', function() {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('should return -4', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('should return 0.2', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return Error', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('should return 0', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 0, 4.5), 0);
    });
});
