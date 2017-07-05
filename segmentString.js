const canSegmentString = (str, dict) => {
  const recurse = (str) => {
    for ( var i = 1; i < str.length; i++ ) {
      let first = str.slice(0, i);
      if ( dict.has(first)) {
        let second = str.slice(i);
        if ( second.length === 0) {
          return true;
        }
        if (dict.has(second)) {
          return true;
        }
        if ( recurse(second) ) {
          return true;
        }
      }
    }
    return false;
  };
  const memoize = (func) => {
    let memo = {};
    return function(...args) {
      //or let args = Array.prototype.slice.call(arguments);
      if ( memo[args] ) {
        return memo[args];
      } else {
        memo[args] = func.apply(null, args);
        return memo[args];
      }
    };
  };
  let memoizedRecurse = memoize(recurse);
  return memoizedRecurse(str);

};








