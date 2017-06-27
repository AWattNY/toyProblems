const stackMax = (input) => {
  input = input.split('\n');
  let n = +input[0];
  let data;
  let stack = [];
  let len;
  let popped;
  let newMax;
  
  for ( var i = 1; i <= n; i++ ) {
    data = input[i];
    if ( +data.charAt(0) === 1 ) {
      data = data.split(' ');
      if ( stack.length === 0 ) {
        stack.push([+data[1], +data[1]]);
      } else {
        len = stack.length;
        newMax = Math.max( +data[1], stack[len - 1][1]);
        stack.push([+data[1], newMax]);
      }
        
    } else if ( +data === 2 ) {
      stack.pop();
        
    } else if ( +data === 3 ) {
      len = stack.length;
      console.log(stack[len - 1][1]);   
    }
  }
  
    
};