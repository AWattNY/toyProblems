// You have two strings, s and t. The string t contains only unique elements. 
// Find and return the minimum consecutive substring of s that contains all of
 // the elements from t.

// It's guaranteed that the answer exists. If there are several answers, return 
// the one which starts from the smallest index.

// Example

// For s = "adobecodebanc" and t = "abc", the output should be
// minSubstringWithAllChars(s, t) = "banc".

const minSubstringWithAllChars = (s, t) => {
  if ( t === '' ) {
    return '';
  }
  if ( t.length === 1 ) {
    return (t.indexOf(t) === -1) ? '' : t;
  }
  let tCharCount = {};
  let sCharCount = {};  
  let count = 0;
  let start = 0;
  let results = [0, +Infinity];
  t.split('').forEach(char => {
    tCharCount[char] = tCharCount[char]++ || 1;
  }); 
  for ( var i = 0; i < s.length; i++ ) {
    let char = s.charAt(i);
    sCharCount[char] = sCharCount[char] + 1 || 1; 
    if ( tCharCount[char] && sCharCount[char] <= tCharCount[char] ) {
      count++;
    }
    if ( count === t.length ) {
      let firstChar = s.charAt(start);
      while ( !tCharCount[firstChar] || sCharCount[firstChar] > tCharCount[firstChar] ) {
        if ( sCharCount[firstChar] > tCharCount[firstChar] ) {
          sCharCount[firstChar]--; 
        }
        start++; 
        firstChar = s.charAt(start); 
      }
      if ( results[1] - results[0] > i - start ) {
        results = [start, i]; 
      }
    }
  }
  return (results[1] === +Infinity) ? '' : s.slice(results[0], results[1] + 1);  
};


const minSubstringWithAllChars2 = (s, t) => {
  if ( t === '' ) {
    return '';
  }
  if ( t.length === 1 ) {
    return (t.indexOf(t) === -1) ? '' : t;
  }
  let tCharCount = {};
  let sCharCount = {};  
  let count = 0;
  let start = 0;
  let results = [];
  t.split('').forEach(char => {
    tCharCount[char] = tCharCount[char]++ || 1;
  }); 
  for ( var i = 0; i < s.length; i++ ) {
    let char = s.charAt(i);
    sCharCount[char] = sCharCount[char] + 1 || 1; 
    if ( tCharCount[char] && sCharCount[char] <= tCharCount[char] ) {
      count++;
    }
    if ( count === t.length ) {
      let firstChar = s.charAt(start);
      while ( !tCharCount[firstChar] || sCharCount[firstChar] > tCharCount[firstChar] ) {
        if ( sCharCount[firstChar] > tCharCount[firstChar] ) {
          sCharCount[firstChar]--; 
        }
        start++; 
        firstChar = s.charAt(start); 
      }
      // if ( results.length !== 0 ) {
      //   if ( results[0][1] - results[0][0] > i - start ) {
      //     results.pop();
      //     results.push([start, i]); 
      //   }
      // } else {
      //   results.push([start, i]);
      // }
      results.push([start, i]);
    }
  }
  results.sort((a, b) => a[1] - a[0] - b[1] + b[0]);
  console.log(results);
  return (results.length === 0) ? '' : s.slice(results[0][0], results[0][1] + 1);  
};
console.log(minSubstringWithAllChars2(s, t));