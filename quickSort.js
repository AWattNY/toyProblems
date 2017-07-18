const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, lo, hi) => {
  let pivot = arr[hi];
  let i = lo;
  for ( var j = 0; j < hi; j++ ) {
    if ( arr[j] <= pivot ) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, hi);
  return i;
};
const quickSort = (arr, lo, hi) => {
  if (lo < hi) {
    let partitionIndex = partition(arr, lo, hi);
    quickSort(arr, lo, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, hi);
  }
};


let A = [55, -35, 26, 200, 0, 32, 18, 7, 23, 8, 2, 3];
quickSort(A, 0, A.length - 1);
console.log(A);