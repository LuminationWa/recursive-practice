// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

// Sample:

// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60

const productOfArray = (array) => {
    if (array.length === 1) return 1;
    return array[array.length - 1] * productOfArray(array.slice(0, array.length - 1));
}

module.exports = productOfArray;