const combineThree = (A, B, C) => {

  let result = [];

  return A.reduce((accu, curr, i) => {
    accu = accu.concat([curr, B[i], C[i]]);
    return accu;    
  }, []);
};


const A = ['a1', 'a2', 'a3'];
const B = ['b1', 'b2', 'b3'];
const C = ['c1', 'c2', 'c3'];

console.log(combineThree(A, B, C));