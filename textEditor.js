const processData = (input) => {
  input = input.split('\n');
  let s = '';
  let q = +input[0];
  let opId;
  let param;
  let len;
  let result = '';
  let stack = [''];
  
  for ( var i = 1; i <= q; i++ ) {

    opId = +input[i].split(' ')[0];
    if ( opId === 1 ) {
      param = input[i].split(' ')[1];
      len = stack.length;
      s = stack[len - 1] + param;
                 
      
      
      stack.push(s);
    }
    if ( opId === 2 || opId === 3 ) {
      param = +input[i].split(' ')[1]; 
      if ( opId === 2 ) {
        len = stack.length;
        l = s.length;
        s = stack[len - 1].slice(0, l - param );
        stack.push(s);
      }
      if ( opId === 3 ) {
        len = stack.length;
        s = stack[len - 1];
        result += s.charAt(param - 1);    
        
          
      }
    }
    if ( opId === 4 ) {
      if ( stack.length > 1 ) {
        stack.pop();
        len = stack.length;
        s = stack[len - 1];
      }
      
    }
    
      
  }
  return result;  
}; 

