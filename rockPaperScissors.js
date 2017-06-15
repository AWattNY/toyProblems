var rockPaperScissors = function (nR) {
  const possibleThrows = ['rock', 'paper', 'scissors'];
  let len = possibleThrows.length;
  let result = [];
  if ( nR === undefined ) {
    nR = len;
  }
  var solve = function(n, array) {
    
   
    if (n === nR) {
      result.push(array);
      return true;
    }
    var index = 0;

    while (index < len) {
      solve(n + 1, array.concat(possibleThrows[index]));
       
      index++;
    }
  };
  solve(0, []);
  return result;
   
};



// console.log(rockPaperScissors(3));