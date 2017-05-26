// Solution 1 using JS Objects
const sumTwoValues = (array, val) => {
  let storage = {};
  for ( var i in array ) {
    if ( storage[val - array[i]])	{
      return true;
    }
    storage[array[i]] = array[i];
  }
  return false;
};

// Solution 2 using JS Sets
const sumTwoValues = (array, val) => {
  let storage = new Set();
  for ( var i in array ) {
    if ( storage.has(val - array[i]) )	{
      return true;
    }
    storage.add(array[i]);
  }
  return false;
};

//Solution 3 Optimized
const sumTwoValues = (array, value) => {
  let left = 0;
  let right = array.length - 1;
  while ( left < right ) {
    let sum = array[left] + array[right];
    if ( sum === value ) {
      return true;
    }	
    if ( sum > value ) {
      right --;
    } else {
      left++;
    }
  }
  
  return false;
};

console.log(sumTwoValues([1, 2, 5, 8, 50, 61, 100], 580));