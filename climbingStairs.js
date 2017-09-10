// You are climbing a staircase that has n steps. You can take the steps either 1 or 2 at 
// a time. Calculate how many distinct ways you can climb to the top of the staircase.

// Example

// For n = 1, the output should be
// climbingStairs(n) = 1;

// For n = 2, the output should be
// climbingStairs(n) = 2.

// You can either climb 2 steps at once or climb 1 step two times.

const climbingStairs = (n) => {
  let dp = [];
  dp[0] = 0;
  dp[1] = 1;
  for ( var i = 2; i <= n + 1; i++ ) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n + 1];
};