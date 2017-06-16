const largestProductOfThree = ( array ) => {
  if ( array.length === 3 ) {
    return array[0] * array[1] * array[2];
  }
  lowestProductOf2 = array[0] * array[1];
  largestProductOf3 = -Infinity;
  largestProductOf2 = array[0] * array[1];
  highSoFar = Math.max(array[0], array[1]);
  lowSofar = Math.min(array[0], array[1]);
  for ( var i = 2; i < array.length; i++) {
    largestProductOf3 = Math.max(largestProductOf3, largestProductOf2 * array[i], lowestProductOf2 * array[i]);
    lowestProductOf2 = Math.min(lowestProductOf2, lowSofar * array[i]);
    largestProductOf2 = Math.max(largestProductOf2, highSoFar * array[i]); 
    
    highSoFar = Math.max(highSoFar, array[i]);
    lowSofar = Math.min(lowSofar, array[i]);
  }
  return largestProductOf3;   
};

console.log(largestProductOfThree([0, 2, 3]) === 0 );
console.log(largestProductOfThree([2, 3, 5]) === 30);
console.log(largestProductOfThree([7, 5, 3]) === 105);
console.log(largestProductOfThree([7, 5, 7]) === 245);
console.log(largestProductOfThree([2, 5, 3, 7]) === 105);
console.log(largestProductOfThree([11, 7, 5, 3, 2]) === 385);
console.log(largestProductOfThree([2, 13, 7, 3, 5, 11]) === 1001);
console.log(largestProductOfThree([2, 11, 13, 7, 13, 3, 11, 5]) === 1859);
console.log(largestProductOfThree([2, 3, -11, 7, 5, -13]) === 1001);
console.log(largestProductOfThree([-31, 41, 34, -37, -17, 29]) === 47027);