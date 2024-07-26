const assert = require('assert');
const calculateNumber = require('./0-calcul');

assert.strictEqual(calculateNumber(1, 3), 4);
assert.strictEqual(calculateNumber(2.8, 3), 6);
assert.strictEqual(calculateNumber(1, 2.2), 3);
assert.strictEqual(calculateNumber(5.2, 4.8), 10);
