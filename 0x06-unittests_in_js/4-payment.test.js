const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function() {
    let calculateNumberStub;
    let consoleLogSpy;

    beforeEach(function() {
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        consoleLogSpy = sinon.spy(console, 'log')
    });

    afterEach(function() {
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });

    it('should call Utils.calculateNumber with SUM, 100, 20 and log The total is: 10', function() {
        sendPaymentRequestToApi(100, 20);

        // Assertions to check if the spy was called correctly
        // Check if it was called exactly once
        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        // Check if it was called with the correct arguments
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});
