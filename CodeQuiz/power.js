// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

const power = (base, exponent) => {
    if (base === 1 || exponent === 0) return 1;
    else return base * power(base, exponent - 1);
}
module.exports = power;