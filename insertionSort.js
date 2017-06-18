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

var testingTransform = function(array) {
  var transform = [];
  
  for (var i = 0; i < array.length; i++) {
    transform.push({value: array[i], i: i});
  }

  return transform;
};

const insertionSort2 = (array, comparator) => {

  if (!comparator) {
    comparator = function(a, b) {
      if ( a.value < b.value) {
        return -1;
      } 
      return 0; 
    };
  }
  for ( var i = 1; i < array.length; i++) {
    let val = array[i];
    let index = i;
    while (index > 0 && comparator(val, array[index - 1]) === -1) {
      array[index] = array[index - 1];
      index--;
    }
    array[index] = val;
  }
  return array;
};

console.log(insertionSort2(testingTransform([9, 5, 6, 15, 5])));