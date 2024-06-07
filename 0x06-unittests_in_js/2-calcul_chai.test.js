const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return the sum of two rounded numbers', function() {
            expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
            expect(calculateNumber('SUM', -1.5, -2.5)).to.equal(-3);
            expect(calculateNumber('SUM', 1.4, -2.6)).to.equal(-2);
            expect(calculateNumber('SUM', 1000000000.4, 2000000000.6)).to.equal(3000000001);
        });
    });

    describe('SUBTRACT', function() {
        it('should return the difference of two rounded numbers', function() {
            expect(calculateNumber('SUBTRACT', 3.3, 7.8)).to.equal(-5)
            expect(calculateNumber('SUBTRACT', 7.8, 3.3)).to.equal(5)
            expect(calculateNumber('SUBTRACT', 1.4, -2.6)).to.equal(4);
        });
    });

    describe('DIVIDE', function() {
        it('should return the division of two rounded numbers', function() {
            expect(calculateNumber('DIVIDE', 5.6, 2.4)).to.equal(3);
            expect(calculateNumber('DIVIDE', 7.8, 3.1)).to.equal(2.6666666666666665);
            expect(calculateNumber('DIVIDE', 9.2, 4.6)).to.equal(1.8);
        });

        it('should return "Error" when dividing by 0', function() {
            expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
            expect(calculateNumber('DIVIDE', 2.6, 0.2)).to.equal('Error');
        });
    });
});
