const sumOfThree = (arr, target) => {
  for ( var i = 0; i < arr.length; i++ ) {
    for ( var j = 0; j < arr.length - 1; j++ ) {
      for ( var k = 0; k < arr.length - 2; k++ ) {
        if ( i !== j && j !== k && i !== k ) {
          if ( target === arr[i] + arr[j] + arr[k] ) {
            return true;
          }
        }
      }
    } 
  }
  return false;
};