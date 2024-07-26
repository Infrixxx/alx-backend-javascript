const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('adds two rounded numbes', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 2.8, 3), 6);
    assert.strictEqual(calculateNumber('SUM', 1, 2.2), 3);
    assert.strictEqual(calculateNumber('SUM', 5.2, 4.8), 10);
  });

  it('subtracts two rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 3, 2.8), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 2.2, 1), 1);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('divides two rounded numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3, 3), 1);
    assert.strictEqual(calculateNumber('DIVIDE', 3.8, 2), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 6, 2.2), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 9.2, 2.8), 3);
  });

  it('retuens error when dividing by 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3, 0), 'Error');
  });
});
