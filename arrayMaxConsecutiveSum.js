const arrayMaxConsecutiveSum = (inputArray) => {
  let currentMax = 0;
  let maxSoFar = -Infinity;
  for ( var i = 0; i < inputArray.length; i++ ) {
    let currentValue = inputArray[i];
    currentMax += currentValue;
    maxSoFar = Math.max(currentMax, maxSoFar);
    currentMax = Math.max( 0, currentMax);
  }
  return maxSoFar;
};
