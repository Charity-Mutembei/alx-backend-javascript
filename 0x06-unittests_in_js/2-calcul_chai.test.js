const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');
const { it, describe } = require("mocha");

describe('calculateNumber', function() {
    it('should return 0', function() {
        expect(calculateNumber('DIVIDE', 0, 4.5)).to.equal(0);
    });

    it('should return 0.2', function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return -4', function() {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 6', function() {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return Error', function() {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
