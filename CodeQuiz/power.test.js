const power = require('./power');

// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

test('returns correct value', () => {
    expect(power(3, 0)).toBe(1);
});

test('returns correct value * ', () => {
    expect(power(3, 1)).toBe(3);
});

test('returns correct value ** ', () => {
    expect(power(3, 3)).toBe(27);
});