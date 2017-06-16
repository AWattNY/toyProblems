const shuffleArray = ( array ) => {  
  const swap = (i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;  
  };

  for (var i = 0; i < array.length; i++) {
    // select a random element from the un-shuffled portion of the array
    var randomIndex = i + Math.floor(Math.random() * (array.length - i));
    swap(i, randomIndex);
    
  }
  return array;
};
const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffleArray(A));