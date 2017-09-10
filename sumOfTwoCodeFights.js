// You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

// Example

// For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
// sumOfTwo(a, b, v) = true.


const sumOfTwo = (a, b, v) => {
  let n = a.length;
  let m = b.length;
  let hashMap = new Map();
  a.forEach(el => hashMap.set(el, true));
  
  
  for ( var el of b ) {
    if ( hashMap.has(v - el) ) {
      return true;
    }
  }
  return false;
};


