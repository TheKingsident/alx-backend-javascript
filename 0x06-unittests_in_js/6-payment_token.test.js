// 6-payment_token.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
    it('should return a resolved promise with data if success is true', function() {
        return getPaymentTokenFromAPI(true).then(function(response) {
            expect(response).to.deep.equal({ data: 'Successful response from the API' });
        });
    });

    it('should return a resolved promise without data if success is false', function() {
        return getPaymentTokenFromAPI(false).then(function(response) {
            expect(response).to.be.undefined;
        });
    });
});
