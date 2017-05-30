const zeroMatrix = (M) => {
  const length = M[0].length;
  const height = M.length;
  let firstRowHasZero = false;
  let firstColHasZero = false;

  for ( var col = 0; col < length; col++ ) {
    if ( M[0][col] === 0 ) {
      firstRowHasZero = true;
      break;
    }
  }

  for ( var row = 0; row < height; row++ ) {
    if ( M[row][0] === 0 ) {
      firstColHasZero = true;
      break;
    }
  }

  for ( var row = 1; row < height; row++ ) {
    for ( var col = 1; col < length; col++ ) {
      if ( M[row][col] === 0 ) {
        M[row][0] = 0;
        M[0][col] = 0;
      }
    }
  }

  for ( var col = 1; col < length; col++ ) {
    if ( M[0][col] === 0 ) {
      for ( var row = 1; row < height; row++ ) {
        M[row][col] = 0;
      }
    }
  }

  for ( var row = 1; row < height; row++ ) {
    if ( M[row][0] === 0 ) {
      for ( var col = 1; col < length; col++ ) {
        M[row][col] = 0;
      }
    }
  }
  
  if ( firstRowHasZero ) {
    for ( var col = 0; col < length; col++ ) {
      M[0][col] = 0; 
    }	
  }
  
  if ( firstColHasZero ) {
    for ( var row = 0; row < height; row++ ) {
      M[row][0] = 0; 
    }	
  }
  return M;
};


let myMatrix = [
  [1, 2, 3, 4],
  [0, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 0, 4]
];

console.log(zeroMatrix(myMatrix));

