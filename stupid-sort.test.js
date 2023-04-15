const stupidSort = require("./index");

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

test("stupidSort should sort an array of integers", () => {
  const input = [5, 3, 8, 1, 2];
  stupidSort(input);
  expect(isSorted(input)).toBe(true);
});

test("stupidSort should sort an array of strings", () => {
  const input = ["banana", "apple", "kiwi", "grape", "orange"];
  stupidSort(input);
  expect(isSorted(input)).toBe(true);
});

test("stupidSort should sort an array with duplicate elements", () => {
  const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  stupidSort(input);
  expect(isSorted(input)).toBe(true);
});

test("stupidSort should handle an empty array", () => {
  const input = [];
  stupidSort(input);
  expect(isSorted(input)).toBe(true);
});

test("stupidSort should handle an array with a single element", () => {
  const input = [42];
  stupidSort(input);
  expect(isSorted(input)).toBe(true);
});
