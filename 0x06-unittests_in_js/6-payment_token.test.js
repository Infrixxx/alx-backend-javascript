const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a promise', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      assert.equal(res.data, 'Successful response from the API');
      done();
    }).catch((err) => done(err));
  });
});
