const rotateMatrix = (matrix) => {
  const n = matrix.length;

  for ( var level = 0; level < Math.floor(n / 2); level++) {
    for ( var col = level; col < n - 1 - level; col++ ) {
      const temp = matrix[level][col];
      matrix[level][col] = matrix[n - 1 - col][level];
      matrix[n - 1 - col][level] = matrix[n - 1 - level][n - 1 - col];
      matrix[n - 1 - level][n - 1 - col] = matrix[col][n - 1 - level];
      matrix[col][n - 1 - level] = temp;
    }
  }
  return matrix;
};

let myMatrix = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
];

console.log(rotateMatrix(myMatrix));