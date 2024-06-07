const Utils = require("./utils");

function sendPaymentRequestToApi (totalAmount, totalShipping) { 
    sumOfParams = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log('The total is: ${sumOfParams}');
}

module.exports = sendPaymentRequestToApi
