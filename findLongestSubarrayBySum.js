// findLongestSubarrayBySum using brute force
const findLongestSubarrayBySum = (s, arr) => {
  let currentSum = 0;
  let results = [];
  let solved = false;
  for ( var i = 0; i < arr.length; i++ ) {
    currentSum = arr[i];
    for ( var j = i + 1; j <= arr.length; j++ ) {
      if ( currentSum === s ) {
        if ( results.length === 0 || ( j - i - 1 > results[1] - results[0] ) ) {
          results = [i + 1, j];
        }
      }
      if ( currentSum > s || j === arr.length ) {
        
        break;
      }
      currentSum += arr[j];
    }

  }
  return ( results.length === 0 ) ? [-1] : results;
};

// Optimized Solution 
const findLongestSubarrayBySum2 = (s, arr) => {
  let currentSum = arr[0];
  let start = 0;
  let end = 0;
  let results = [];
  for ( var i = 1; i <= arr.length; i++ ) {
    while ( currentSum > s && start < i - 1 ) {
      currentSum -= arr[start];
      start++;
    }
    if ( currentSum === s ) {
      if ( results.length === 0 || ( end - start > results[1] - results[0] ) ) {
        results = [start + 1, end + 1];
      }
    }
    
    if ( i < arr.length ) {
      currentSum += arr[i];
      end++;
    }
  }
  return ( results.length === 0 ) ? [-1] : results;
};