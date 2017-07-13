const productArray = (arr) => {
  let product = 1;
  let result = [];
  for ( var i = 0; i <= arr.length - 1; i++ ) {
    
    
    result.push(product);
    product *= arr[i]; 
  }
  product = 1;
  for ( var i = arr.length - 1; i >= 0; i-- ) {
    result[i] *= product;
    product *= arr[i];
  }
  return result;
};

//var A = [1, 7, 3, 4];
//console.log(productArray(A)); => [84, 12, 28, 21]
