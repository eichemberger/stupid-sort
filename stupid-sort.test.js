const stupidSort = require("./index");

function isSorted(arr, compareFn) {
  for (let i = 1; i < arr.length; i++) {
    if (compareFn(arr[i - 1], arr[i]) > 0) {
      return false;
    }
  }
  return true;
}

function defaultCompareFn(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}

test("stupidSort should sort an array of integers", () => {
  const input = [5, 3, 8, 1, 2];
  stupidSort(input);
  expect(isSorted(input, defaultCompareFn)).toBe(true);
});

test("stupidSort should sort an array of strings", () => {
  const input = ["banana", "apple", "kiwi", "grape", "orange"];
  stupidSort(input, defaultCompareFn);
  expect(isSorted(input, defaultCompareFn)).toBe(true);
});

test("stupidSort should sort an array with duplicate elements", () => {
  const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  stupidSort(input);
  expect(isSorted(input, defaultCompareFn)).toBe(true);
});

test("stupidSort should handle an empty array", () => {
  const input = [];
  stupidSort(input);
  expect(isSorted(input, defaultCompareFn)).toBe(true);
});

test("stupidSort should handle an array with a single element", () => {
  const input = [42];
  stupidSort(input);
  expect(isSorted(input, defaultCompareFn)).toBe(true);
});

test("stupidSort should sort an array of integers in descending order using custom comparison function", () => {
  const input = [5, 3, 8, 1, 2];
  const customCompareFn = (a, b) => b - a;
  stupidSort(input, customCompareFn);
  expect(isSorted(input, customCompareFn)).toBe(true);
});

test("stupidSort should sort an array of objects by name attribute", () => {
  const input = [
    { name: "banana" },
    { name: "apple" },
    { name: "kiwi" },
    { name: "grape" },
    { name: "orange" },
  ];
  const objectNameCompareFn = (a, b) => defaultCompareFn(a.name, b.name);
  stupidSort(input, objectNameCompareFn);
  expect(isSorted(input, objectNameCompareFn)).toBe(true);
});
