// You have an array of integers nums and an array queries, where queries[i] is a pair 
// of indices (0-based). Find the sum of the elements in nums from the indices at 
// queries[i][0] to queries[i][1] (inclusive) for each query, then add all of the sums for 
// all the queries together. Return that number modulo 109 + 7.

// Example

// For nums = [3, 0, -2, 6, -3, 2] and queries = [[0, 2], [2, 5], [0, 5]], the output should be
// sumInRange(nums, queries) = 10.

// The array of results for queries is [1, 3, 6], so the answer is 1 + 3 + 6 = 10.


const sumInRange = (nums, queries) => {
  let m = 1000000007;
  let prefixSum = [];
  let sum;
  prefixSum[0] = nums[0];
  for ( var i = 1; i < nums.length; i++ ) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];  
  }
  return queries.reduce(( accu, curr ) => {
    if ( curr[0] === 0 ) {
      sum = prefixSum[curr[1]];
    } else {
      sum = prefixSum[curr[1]] - prefixSum[curr[0] - 1];
    }
    if ( sum >= 0 ) {
      accu += sum % m;  
    } else {
      accu += m + sum;  
    }
    
    return accu;
  }, 0) % m;
};

