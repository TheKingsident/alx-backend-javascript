const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return the sum of two rounded numbers', function() {
        assert.equal(calculateNumber(1.4, 2.6), 4);
        assert.equal(calculateNumber(1.5, 2.5), 4);
        assert.equal(calculateNumber(1.6, 2.4), 4);
    });

    it('should return the sum of two negative rounded numbers', function() {
        assert.equal(calculateNumber(-1.4, -2.6), -4);
        assert.equal(calculateNumber(-1.5, -2.5), -4);
        assert.equal(calculateNumber(-1.6, -2.4), -4);
    });

    it('should return the sum of two large rounded numbers', function() {
        assert.equal(calculateNumber(1000000000.4, 2000000000.6), 3000000001);
    });
});
