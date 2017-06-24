processData = (input0, input) => {
  var n = input0[0];
  var m = input0[1];
  var start;
  var end;
  var k;
  var max = -Infinity;
  var arr = [];
  for ( var i = 0; i < n; i++ ) {
    arr[i] = 0;
  }  
  
  
  for ( var i = 0; i < m; i ++ ) {
    start = input[i][0] - 1;
    end = input[i][1] - 1;
    k = input[i][2];
    
    
    
    arr[start] += k;
        
    if ( end + 1 < n ) {
      arr[end + 1] -= k;
    }
    console.log(arr);
      
      
  }
  prefixSum = arr[0];
  for ( var i = 1; i < n; i++ ) {
    
    prefixSum += arr[i];
    if ( prefixSum > max ) {
      max = prefixSum;
    }
  }
  return max;
}; 

var input0 = [4, 3];

var input = [
[2, 3, 603],
[1, 1, 286],
[4, 4, 882],
];

console.log(processData(input0, input));