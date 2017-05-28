const moveZerosToLeft = (array) => {
  let writeIndex = array.length - 1;
  let readIndex = array.length - 1;

  while ( readIndex > -1 ) {
    if ( array[readIndex] !== 0 ) {
      array[writeIndex] = array[readIndex];
      writeIndex--;
    } 
    readIndex--;
  }
   
  while ( writeIndex > -1 ) {
    array[writeIndex] = 0;
    writeIndex--;  
  }
};

// let array = [1, 10, 20, 0, 59, 63, 0, 88, 0];
// moveZerosToLeft(array);
// console.log(array);