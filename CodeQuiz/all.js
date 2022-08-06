// Write a function called all which accepts an array and a callback and returns true
//  if every value in the array returns true when passed as parameter to the callback function

// Sample:

// var allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false

const all = (array, callback) => {
  if (!callback(array[array.length - 1])) return false;
  else if (array.length - 1 === 0) return true;
  else return all(array.slice(0, array.length - 1), callback);
};

module.exports = all;
