const sumArray = ( array ) => {
  let currentSum = 0;
 
  return array.reduce((maxSum, curr) => {
    currentSum += curr;
    if ( maxSum < currentSum ) {
      maxSum = currentSum;
    }
    if ( currentSum < 0 ) {
      currentSum = 0;
    }
    return maxSum;
  }, -Infinity); 
};

console.log(sumArray([-3, -2, -1, -2, -3]));