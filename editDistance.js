// Given two strings str1 and str2 and below operations that can be performed on str1:
// a. Insert
// b. Remove
// c. Replace
// Find minimum number of edits required to convert 'str1' into 'str2'

const editDistance = ( string1, string2 ) => {
  const n = string1.length;
  const m = string2.length;
  let dp = [];

  for ( var j = 0; j <= n; j++ ) {
    dp[j] = [];
    for ( var k = 0; k <= m; k++ ) {
      if ( j === 0 ) {
        dp[j][k] = k;
      } else if ( k === 0 ) {
        dp[j][k] = j;
      } else if ( string1[j] === string2[k] ) {
        dp[j][k] = dp[j - 1][k - 1];
      } else {
        dp[j][k] = 1 + Math.min( dp[j - 1][k], dp[j][k - 1], dp[j - 1][k - 1]); 
      }
    }  
  }
  return dp[n][m];
}; 

console.log(editDistance('adceg', 'abcfg'));

const editDist = ( str1, str2, m, n ) => {
  if ( m === 0 ) {
    return n;
  }
  if ( n === 0 ) {
    return m;
  }
  if ( str1[m - 1] === str2[n - 1] ) {
    return editDist( str1, str2, m - 1, n - 1);
  }
  return 1 + Math.min( editDist(str1, str2, m, n - 1),
                       editDist(str1, str2, m - 1, n),
                       editDist(str1, str2, m - 1, n - 1)
                      );
};

console.log(editDist('sunday', 'saturday', 6, 8));

