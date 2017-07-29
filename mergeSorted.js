const sortedMerge = ( arrA, arrB ) => {
  let lastA = arrA.length - 1;
  let lastB = arrB.length - 1;
  let mergeIndex = lastA + lastB + 1;

  while ( lastB >= 0 ) {
    if ( lastA >= 0 && arrB[lastB] >= arrA[lastA]) {
      arrA[mergeIndex] = arrB[lastB];
      lastB--;  
    } else {
      arrA[mergeIndex] = arrA[lastA];
      lastA--;
    }
    mergeIndex--;
  }
};

var A = [1, 5, 8, 12];

var B = [3, 7, 10, 22];
sortedMerge(A, B);
console.log(A);