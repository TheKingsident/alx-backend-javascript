const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with correct arguments', function() {
        // Create a spy on Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        //Call the function to test
        sendPaymentRequestToApi(100, 20);

        // Assertions to check if the spy was called correctly
        // Check if it was called exactly once
        expect(calculateNumberSpy.calledOnce).to.be.true;
        // Check if it was called with the correct arguments
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

        calculateNumberSpy.restore();
    });

});
