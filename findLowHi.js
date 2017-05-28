const findRangeLowIndex = (array, key) => {
  const length = array.length;
  
  let low = 0;
  let high = length - 1;
  let midPoint = Math.floor(high / 2);
  while ( low <= high ) {
    if (array[midPoint] < key ) {
      low = midPoint + 1;
    } else {
      high = midPoint - 1;
    } 
    midPoint = low + Math.floor((high - low) / 2);
  }
  if ( array[low] === key ) {
    return low;
  }
  return -1;
};

const findRangeHighIndex = (array, key) => {
  const length = array.length;
  
  let low = 0;
  let high = length - 1;
  let midPoint = Math.floor(high / 2);
  while ( low <= high ) {
    if (array[midPoint] <= key ) {
      low = midPoint + 1;
    } else {
      high = midPoint - 1;
    } 
    midPoint = low + Math.floor((high - low) / 2);
  }
  if ( array[high] === key ) {
    return high;
  }
  return -1;
};
const array = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 20];
console.log(findRangeLowIndex(array, 8));
console.log(findRangeHighIndex(array, 8));


