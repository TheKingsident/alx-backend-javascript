const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return the sum of two rounded numbers', function() {
            assert.equal(calculateNumber('SUM', 1.4, 2.6), 4);
            assert.equal(calculateNumber('SUM', -1.5, -2.5), -3);
            assert.equal(calculateNumber('SUM', 1.4, -2.6), -2);
            assert.equal(calculateNumber('SUM', 1000000000.4, 2000000000.6), 3000000001);
        });
    });

    describe('SUBTRACT', function() {
        it('should return the difference of two rounded numbers', function() {
            assert.equal(calculateNumber('SUBTRACT', 3.3, 7.8), 5)
            assert.equal(calculateNumber('SUBTRACT', 7.8, 3.3), -5)
            assert.equal(calculateNumber('SUBTRACT', 1.4, -2.6), -4);
        });
    });

    describe('DIVIDE', function() {
        it('should return the division of two rounded numbers', function() {
            assert.equal(calculateNumber('DIVIDE', 5.6, 2.4), 3);
            assert.equal(calculateNumber('DIVIDE', 7.8, 3.1), 2.6666666666666665);
            assert.equal(calculateNumber('DIVIDE', 9.2, 4.6), 1.8);
        });

        it('should return "Error" when dividing by 0', function() {
            assert.equal(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
            assert.equal(calculateNumber('DIVIDE', 2.6, 0.2), 'Error');
        });
    });
});
