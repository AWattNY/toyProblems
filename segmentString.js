const canSegmentString = (str, dict) => {
  const recurse = (str) => {
    for ( var i = 1; i <= str.length; i++ ) {
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
  return recurse(str);

};

const segmentString = ( dict, string ) => {
  if ( string === '' ) {
    return true;
  }
  for ( var i = 1; i <= string.length; i++ ) {
    let firstWord = string.slice(0, i);
    let restOfstring;
    if ( dict.has(firstWord) ) {
      restOfString = string.slice(i, string.length);
      if ( segmentString(dict, restOfString) ) {
        return true;
      }
      
    }
  }
  return false;
};

const data = [['apple', true], ['pear', true], ['pier', true], ['pie', true]];
const dict = new Map(data);
console.log(canSegmentString('pearpierpie', dict));
console.log(segmentString(dict, 'pearpierpie'));






