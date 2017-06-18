const insertionSort = (array) => {
  for ( var i = 1; i < array.length; i++) {
    let val = array[i];
    let index = i;
    while (index > 0 && val < array[index - 1]) {
      array[index] = array[index - 1];
      index--;
    }
    array[index] = val;
  }
  return array;
};

console.log(insertionSort([9, 7, 6, 15, 5]));