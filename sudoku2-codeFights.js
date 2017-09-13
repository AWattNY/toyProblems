// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers 
//in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that 
//compose the grid all contain all of the numbers from 1 to 9 one time.

// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

// Example

// For

// grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
//         ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
//         ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
//         ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
//         ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
//         ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
//         ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
// the output should be
// sudoku2(grid) = true;

// For

// grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
//         ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
//         ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
//         ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
//         ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
//         ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
//         ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
//         ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
// the output should be
// sudoku2(grid) = false.

// The given grid is not correct because there are two 1s in the second column. 
//Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 
//through 9 one time.

const sudoku2 = (grid) => {
  let lineCounts;
  let columnCounts = [];
  let subGridsCounts = [
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, {}, {}],
  ];
  let gridI = 0;
  let gridJ = 0;

  for ( var i = 0; i < 9; i++ ) {
    lineCounts = {};
    if ( i > 2 && i < 6 ) {
      gridI = 1;
    } 
    if ( i >= 6 ) {
      gridI = 2;
    }
    for ( var j = 0; j < 9; j++ ) {
      columnCounts[j] = columnCounts[j] || {};
      let char = grid[i][j];
      if ( char !== '.') {
        if ( lineCounts[char] ) {
          return false;
        } else {
          lineCounts[char] = true;
        } 
        if ( columnCounts[j][char] ) {
          return false;
        } else {
          columnCounts[j][char] = true;    
        }
        if ( j <= 2 ) {
          gridJ = 0;
        }
        if ( j > 2 && j < 6 ) {
          gridJ = 1;
        } 
        if ( j >= 6 ) {
          gridJ = 2;
        }
        if ( subGridsCounts[gridI][gridJ][char] ) {
          return false;
        } else {
          subGridsCounts[gridI][gridJ][char] = true;    
        } 
      }
    }
    lineCounts = {};
  }
  return true;
};