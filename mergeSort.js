const merge = (arr, lo, mid, hi) => {
  let i = 0;
  let j = 0;
  let k = lo;
  let left = arr.slice(lo, mid + 1);
  let right = arr.slice(mid + 1, hi + 1);
  console.log(left);
  console.log(right);
  while ( i < left.length && j < right.length ) {
    if ( left[i] <= right[j] ) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++; 
  }
  while ( i < left.length ) {
    arr[k] = left[i];
    i++;
    k++;  
  }
  
  while ( j < right.length ) {
    arr[k] = right[j];
    j++;
    k++;   
  }
};

const mergeSort = (arr, lo, hi) => {
  if ( lo >= hi ) {
    return;
  }
  const mid = Math.floor(( lo + hi ) / 2);
  mergeSort(arr, lo, mid);
  mergeSort(arr, mid + 1, hi);
  merge(arr, lo, mid, hi);
}; 



var A = [2, 4, 1, 6, 8, 5, 3, 7];
const l = A.length;
mergeSort(A, 0, l - 1);
console.log(A);
