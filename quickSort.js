const partition = function(array, lowIndex, highIndex) {
  const pivot = array[lowIndex];
  let leftIndex = lowIndex;
  let rightIndex = highIndex;
  let swapped;
  while (leftIndex <= rightIndex) {
    while ( array[leftIndex] < pivot ) {
      leftIndex++;
    }
    while ( array[rightIndex] > pivot ) {
      rightIndex--;
    }
    if (leftIndex <= rightIndex) {
      swapped = array[leftIndex];
      array[leftIndex] = array[rightIndex];
      array[rightIndex] = swapped;
      leftIndex++;
      rightIndex--;
    }
  }
  return leftIndex;

};

const quickSort = function(array, lowIndex, highIndex) {
  const index = partition(array, lowIndex, highIndex);
  if (lowIndex < index - 1) {
    quickSort(array, lowIndex, index - 1);
  }
  if (index < highIndex) {
    quickSort(array, index, highIndex);
  }

};
let unsortedArray = [55, -35, 26, 200, 0, 32, 18, 7, 23, 8, 2, 3];
quickSort(unsortedArray, 0, unsortedArray.length - 1);
console.log(unsortedArray);