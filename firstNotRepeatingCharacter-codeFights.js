// Given a string s, find and return the first instance of a non-repeating character in it. 
//If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it 
//appears in the string first.

// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.

// There are no characters in this string that do not repeat.

const firstNotRepeatingCharacter = (s) => {
  var newString = '';
  for ( var i = 0; i < s.length; i++ ) {
    let char = s.charAt(i);
    newString = s.slice(0, i) + s.slice(i + 1);
    if ( newString.indexOf(char) === -1 ) {
      return char;
    }
  }
  return '_';
};