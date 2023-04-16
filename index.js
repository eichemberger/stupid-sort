function isSorted(arr, compareFn) {
  for (let i = 1; i < arr.length; i++) {
    if (compareFn(arr[i - 1], arr[i]) > 0) {
      return false;
    }
  }
  return true;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function defaultCompareFn(a, b) {
  return a - b;
}

function stupidSort(arr, compareFn = defaultCompareFn) {
  while (!isSorted(arr, compareFn)) {
    shuffle(arr);
  }
}

module.exports = stupidSort;
