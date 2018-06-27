function bubbleSort(arr) {
  let sorted = false;
  let lastSorted = arr.length - 1;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < lastSorted; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
      }
    }
    lastSorted--;
  }

  return arr;
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
