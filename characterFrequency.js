const characterFrequency = (string) => {
  let map = new Map();
  let result = [];
  for ( var i = 0; i < string.length; i++ ) {
    let char = string.charAt(i);
    if ( !map.has(char) ) {
      map.set( char, 0);
    } 
    map.set(char, map.get(char) + 1);
  }
  // const chars = [...map.keys()];
  const chars = Array.from(map.keys());
  result = chars.map(char => [char, map.get(char)]);

  result.sort((a, b) => {
    if ( a[1] > b[1] ) { 
      return -1;
    }	
    if ( a[1] < b[1] ) { 
      return 1;
    } 
    if ( a[0] < b[0] ) { 
      return -1;
    }	
    if ( a[0] > b[0] ) { 
      return 1;
    } 
    return 0;
  });
  return result;
};

console.log(characterFrequency('mmaaaiiibbb'));