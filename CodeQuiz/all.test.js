const all = require("./all");

// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

test("returns correct value", () => {
  expect(
    all([1, 9, 2], function (num) {
      return num < 8;
    })
  ).toBe(false);
});

test("returns correct value * ", () => {
  expect(
    all([1, 2, 3], function (num) {
      return num < 7;
    })
  ).toBe(true);
});

test("returns correct value ** ", () => {
  expect(
    all([9, 8, 7, 6, 5, 4], function (num) {
      return num > 5;
    })
  ).toBe(false);
});
