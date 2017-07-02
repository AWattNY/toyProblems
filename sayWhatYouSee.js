const sayWhatYouSee = (arr) => {
  const processString = (str) => {
    let index = 1;
    let count = 1;
    let res = '';
    while ( index < str.length) {
      
      if (str.charAt(index) === str.charAt(index - 1)) {
        count++;
          
      } else {
        res += count + str.charAt(index - 1);
        count = 1;
      }
      
      index++;
    }
    res += count + str.charAt(index - 1);
    return res;     
  };
  const len = arr.length;
  for ( var i = 0; i < len; i++ ) {
    let result = processString(arr[i]);
    console.log(result);    
  }
};