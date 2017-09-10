// For strings = ["cat", "dog", "dog"] and patterns = ["a", "b", "b"], the output should be
// areFollowingPatterns(strings, patterns) = true;
// For strings = ["cat", "dog", "doggy"] and patterns = ["a", "b", "b"], the output should be
// areFollowingPatterns(strings, patterns) = false.

const areFollowingPatterns = (strings, patterns) => {
  let hash = {};
  for ( var i = 0; i < patterns.length; i++ ) {
    let currentPattern = patterns[i];
    if ( !hash[currentPattern] ) {
      if ( Object.values(hash).indexOf(strings[i]) === -1 ) {
        hash[currentPattern] = strings[i];
      } else {
        return false;
      }  
      
    } else {
      if ( hash[currentPattern] !== strings[i] ) {
        return false;
      }
    }
  }
  return true;
  
};
