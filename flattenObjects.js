const flattenObjects = (obj) => {
  let flattened = {};
  const recurse = (element, elementKey) => {
    if ( !(element instanceof Object) || Array.isArray(element)) {
      flattened[elementKey] = element;
      return;
    }
    let prefix = (elementKey === '') ? '' : elementKey + '.';
    for ( var key in element ) {
      recurse(element[key], prefix + key);
    }
  };
  recurse(obj, '');
  return flattened;
};

// var A = { x: [1, 2, 4, 6], y: 'abc', z: {a: 21, b: {n: 22, m: {p: '23', q: 'yt'}}}};
// console.log(flattenObjects(A));
//=>{ x: [ 1, 2, 4, 6 ], y: 'abc','z.a': 21,'z.b.n': 22,'z.b.m.p': '23','z.b.m.q': 'yt' }