const longestPalindrome = (string) => {
  const length = string.length;
  let result = '';	
  const checkPalindrome = ( leftIndex, rightIndex ) => {
    while (leftIndex >= 0 && rightIndex < length  
           && string.charAt(leftIndex) === string.charAt(rightIndex) ) {
      leftIndex--;
      rightIndex++;
    }
    return string.slice( leftIndex + 1, rightIndex );
  }; 
  for ( var index = 0; index < length; index++) {
    let oddPalindrome = checkPalindrome(index - 1, index + 1);
    let evenPalindrome = checkPalindrome(index, index + 1);
    if ( oddPalindrome.length > result.length ) {
      result = oddPalindrome;
    }
    if ( evenPalindrome.length > result.length ) {
      result = evenPalindrome;
    }
  }
  return result;
};

console.log(longestPalindrome('ddccbbaabbccdd'));