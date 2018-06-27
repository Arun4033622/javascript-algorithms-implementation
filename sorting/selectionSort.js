function selectionSort(arr) {
  let minIndex;
  
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      } 
    }

    minIndex !== i ? swap(arr, minIndex, i) : null;
  }

  return arr;
}

function swap(arr, minIndex, i) {
  let tmp = arr[minIndex];
  arr[minIndex] = arr[i];
  arr[i] = tmp;
}
