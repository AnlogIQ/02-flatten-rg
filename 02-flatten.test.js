const assert = require("assert");
const { flatArray } = require("./02-flatten");

assert.strictEqual(
	[1, 2, 3, 4].toString(), 
	flatArray([1, [2, [3]], 4]).toString()
);

assert.strictEqual(
	[1, 2, 3, 5, 6, 7, 9, 10, 4].toString(), 
	flatArray([1, [2, [3, 5, [6, 7, [9, 10]]]], 4]).toString()
);

assert.strictEqual(
	[].toString(), 
	flatArray([]).toString()
);

assert.strictEqual(
	[1, 2, 3].toString(), 
	flatArray([undefined, 1, [2, 3]]).toString()
);

assert.strictEqual(
	[{ prop: 'test' }, 1, 2, 3, 4, 5, 6].toString(), 
	flatArray([{ prop: 'test' }, 1, 2, [3, 4, [5, 6]]]).toString()
);

assert.strictEqual(
	[].toString(), 
	flatArray(undefined).toString()
);