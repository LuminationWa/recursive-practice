const factorial = require('./factorial');

// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that 
// number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

test('returns correct value', () => {
    expect(factorial(3)).toBe(6);
});

test('returns correct value * ', () => {
    expect(factorial(5)).toBe(120);
});

test('returns correct value ** ', () => {
    expect(factorial(1)).toBe(1);
});