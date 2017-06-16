//Test Case 1
//input >>>>>[1,4,2,4, [8, 10, 7], 3, [2, 12]]
// output >>>>> [1, 4, 2, 4, 8, 10, 7, 3, 2, 12]

//Test Case 2
// //input >>>>>[1, 4, 2, 4, [8, [10, 57, 61], 7], 3, [2, 12]]
// output >>>>> [ 1, 4, 2, 4, 8, 10, 57, 61, 7, 3, 2, 12 ]

//Test Case 3
// //input >>>>>[1, 4, 2, 4, [8, [10, [57, 108, 950], 61], 7], 3, [2, 12]]
// output >>>>> [ 1, 4, 2, 4, 8, 10, 57, 108, 950, 61, 7, 3, 2, 12 ]


const processArray = (array) => {
  return array.reduce((accu, curr) => {
    accu = ( Array.isArray(curr) ) ? accu.concat(processArray(curr)) : accu.concat(curr);
    return accu;
  }, []);
};

console.log(processArray([1, 4, 2, 4, [8, [10, [57, 108, 950], 61], 7], 3, [2, 12]]));