const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
    it('should return a resolved promise with data if success is true', function() {
        return getPaymentTokenFromAPI(true).then(function(response) {
            expect(response).to.deep.equal({ data: 'Successful response from the API' });
        });
    });

    it('should return a rejected promise if success is false', function() {
        return getPaymentTokenFromAPI(false).catch(function(error) {
            expect(error.message).to.equal('API request failed');
        });
    });
});
