const balancedParens = (string) => {
  const pairs = {
    '{': '}',
    '[': ']',
    '(': ')'
  };  

  let stack = [];
  for ( var i = 0; i < string.length; i++ ) {
    var char = string.charAt(i);
    if ( pairs[char] ) {
      stack.push(pairs[char]);
    } else if ( char === '}' || char === ']' || char === ')') {
      if ( char !== stack.pop() ) {
        return false;
      }
    }  
  }

  return stack.length === 0;
};



console.log(balancedParens('[(]{)}'));