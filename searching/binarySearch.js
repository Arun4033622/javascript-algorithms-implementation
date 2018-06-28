function binarySearch(arr, el) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (arr[mid] === el) {
      return arr[mid];
    } else if (arr[mid] > el) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}
