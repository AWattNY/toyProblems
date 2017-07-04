const kmp = (string, pattern) => {
  let n = string.length;
  let m = pattern.length;
  let results = [];
  for ( i = 0; i < n; i++ ) {
    for ( j = 0; j < m && i + j < n; j++) {
      if ( string[i + j] !== pattern[j] ) {
        break;
      }

    }
    if ( j === m ) {
      results.push(i);
    }
  }
  return results;
};

const kmp2 = (str, pa) => {
  let results = [];

  for ( var i = 0; i < str.length; i++ ) {
    let s = str.slice(i);
    if ( s.startsWith(pa)) {
      results.push(i);
    }
  }
  return results;
};
console.log(kmp('abcdefgde', 'de'));

console.log(kmp2('deabcdefgde', 'de'));