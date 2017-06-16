const searchRotated = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  while ( start <= end ) {
    let mid = Math.floor(( start + end ) / 2);
  
    if ( array[mid] === target ) {
      return mid;
    }

    if ( array[mid] >= array[start] ) {
      if ( array[start] <= target && target < array[mid] ) {
        end = mid - 1;  
      } else {
        start = mid + 1;    
      }  
    } else {
      if ( array[mid] < target && target <= array[end] ) {
        start = mid + 1;  
      } else {
        end = mid - 1;    
      }   
    }
  }  	
  return null;
};

var A = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

console.log(searchRotated(A, 15));