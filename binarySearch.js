const binarySearch = (Arr, target) => {
  const len = Arr.length;
  let lo = 0;
  let hi = len - 1;
  while ( lo <= hi ) {
    let mid = Math.floor((lo + hi) / 2);
    if ( Arr[mid] === target ) {
      return mid;
    }
    if ( target < Arr[mid] ) {
      hi = mid - 1;
    }
    if ( target > Arr[mid] ) {
      lo = mid + 1;
    }
  }
  return -1;
};


console.log(binarySearch([-2, -1, 3, 4, 5], -1));