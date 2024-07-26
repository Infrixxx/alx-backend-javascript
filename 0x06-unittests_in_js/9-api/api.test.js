const request = require('request');
const { expect } = require('chai');

describe('root page', () => {
  it('should return the status code 200', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return status code 200 when id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when id is not a number', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('tests the server with wrong cart id', (done) => {
    request.get('http://localhost:7865/cart/wrong', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
