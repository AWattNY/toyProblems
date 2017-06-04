//Longest Increasing Subseuence

const lengthOfLIS = ( array ) => {
  const length = array.length;
  let lis = array.map(e => 1);
  let max = 0;
  for ( var i = 0; i < length; i++ ) {
    for ( var j = 0; j < i; j++ ) {
      if ( array[i] > array [j] ) {
        lis[i] = Math.max( lis[j] + 1, lis[i] );
      }
    }
    max = Math.max(lis[i], max);
  }
  return max;
};



const myArray = [10, 22, 9, 33, 21, 50, 41, 60];

console.log(lengthOfLIS(myArray));