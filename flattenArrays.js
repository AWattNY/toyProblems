const flatten = (array) => {
  let flattened = [];
  const recurse = (element) => {
    if ( !Array.isArray(element) ) {
      flattened.push(element);
      return;
    }
    for ( var i = 0; i < element.length; i++ ) {
      recurse(element[i]);

    }
  };
  recurse(array);
  return flattened;
};

// var A = ['abc', 1, [3, [4, 5], {a: 21}], 7, [8, [3, [4, 6]]]];
// console.log(flatten(A));
//=>[ 'abc', 1, 3, 4, 5, { a: 21 }, 7, 8, 3, 4, 6 ]