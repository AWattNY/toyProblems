const firstNonRepeatedCharacter = (string) => {
  let chars = new Map();
  for ( var i = 0; i < string.length; i++ ) {
    let char = string.charAt(i);
    if ( !chars.has(char) ) {
      chars.set(char, 1);
    } else { 
      chars.set(char, chars.get(char) + 1);
    }  
  }
  for ( var i = 0; i < string.length; i++ ) {
    let char = string.charAt(i);
    if ( chars.get(char) === 1 ) {
      return char;
    } 
  }
  return null;

};

console.log(firstNonRepeatedCharacter(''));