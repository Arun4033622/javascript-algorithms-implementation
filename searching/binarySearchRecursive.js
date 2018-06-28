function binarySearchRecursive(arr, el) {
  let mid = Math.floor(arr.length / 2);

  if (arr[mid] === el) {
    return arr[mid];
  } else if (arr[mid] > el && arr.length > 1) {
    return binarySearch(arr.splice(0, mid), el);
  } else if (arr[mid] < el && arr.length > 1) {
    return binarySearch(arr.splice(mid + 1), el);
  } else {
    return -1;
  }
}
