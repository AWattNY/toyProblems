const searchRotated = (array, target) => {
  let lo = 0;
  let hi = array.length - 1;
  while ( lo <= hi ) {
    let mid = Math.floor(( lo + hi ) / 2);
  
    if ( array[mid] === target ) {
      return mid;
    }

    if ( array[mid] >= array[lo] ) {
      if ( array[lo] <= target && target < array[mid] ) {
        hi = mid - 1;  
      } else {
        lo = mid + 1;    
      }  
    } else {
      if ( array[mid] < target && target <= array[hi] ) {
        lo = mid + 1;  
      } else {
        hi = mid - 1;    
      }   
    }
  }  	
  return null;
};

var A = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

console.log(searchRotated(A, 3));