const productOfArray = require('./productOfArray');

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

// Sample:

// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60

test('returns correct value', () => {
    expect(productOfArray([1,2,3])).toBe(6);
});

test('returns correct value*', () => {
    expect(productOfArray([1,2,3,10])).toBe(60);
});

test('returns correct value**', () => {
    expect(productOfArray([1,1,1,1])).toBe(1);
});

test('returns correct value***', () => {
    expect(productOfArray([1,0])).toBe(0);
});
