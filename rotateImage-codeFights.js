// You are given an n x n 2D matrix that represents an image. Rotate
 // the image by 90 degrees (clockwise).

// Example

// For

// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]


const rotateImage = (a) => {
  let n = a.length;

  for ( var h = 0; h < Math.floor(n / 2); h++ ) {
    for ( var i = h; i < n - 1 - h; i++ ) {
      let temp = a[h][i];
      a[h][i] = a[n - 1 - i][h];
      a[n - 1 - i][h] = a[n - 1 - h][n - 1 - i];
      a[n - 1 - h][n - 1 - i] = a[i][n - 1 - h];
      a[i][n - 1 - h] = temp;

    }
  }
  return a;
};

