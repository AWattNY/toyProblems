const scn = (arr1, arr2, arr3 ) => {
  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;
  while ( idx1 < arr1.length && idx2 < arr2.length && idx3 < arr3.length) {
    if ( arr1[idx1] === arr2[idx2] && arr2[idx2] === arr3[idx3] ) {
      return arr1[idx1];
    }
    let min = Math.min(arr1[idx1], arr2[idx2], arr3[idx3]);
    if ( arr1[idx1] === min ) {
      idx1++;
    }
    if ( arr2[idx2] === min ) {
      idx2++;
    }
    if ( arr3[idx3] === min ) {
      idx3++;
    } 
  }
  return null;
};