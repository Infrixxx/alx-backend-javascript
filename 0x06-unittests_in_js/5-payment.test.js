const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should return 120', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(spy, 'The total is: 120');
  });

  it('should return 20', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnceWithExactly(spy, 'The total is: 20');
  });
});
