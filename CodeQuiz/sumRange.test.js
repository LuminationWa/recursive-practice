const sumRange = require('./sumRange');

// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

test('returns correct value', () => {
    expect(sumRange(3)).toBe(6);
});

test('returns correct value *', () => {
    expect(sumRange(1)).toBe(1);
});

test('returns correct value **', () => {
    expect(sumRange(5)).toBe(15);
});