const searchRotated = (Arr, target, start, end) => {
  let mid = Math.floor(( start + end ) / 2);
  
  if ( Arr[mid] === target ) {
    return mid;
  }

  if ( Arr[mid] > Arr[start] ) {
    if ( Arr[start] <= target && target < Arr[mid] ) {
      return searchRotated(Arr, target, start, mid - 1);  
    } else {
      return searchRotated(Arr, target, mid + 1, end);    
    }  
  } else if ( Arr[mid] < Arr[start] ) {
    if ( Arr[mid] < target && target < Arr[end] ) {
      return searchRotated(Arr, target, mid + 1, end);  
    } else {
      return searchRotated(Arr, target, start, mid - 1);    
    }   
  }	
  return -1;
};

var A = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

console.log(searchRotated(A, 5, 0, 12));