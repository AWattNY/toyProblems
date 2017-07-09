
const makeChange = (total) => {
  var result = 0;
  var denominations = [ 5, 10, 25];
  (function change(index, tot) {
    let currentdenomination = denominations[index];
    if ( index === 0 ) {
      tot % currentdenomination === 0 && result++;
      return;
    }
    while ( tot >= 0 ) {
      
      change(index - 1, tot);
      tot -= currentdenomination;
    }

  })(denominations.length - 1, total);
  return result;
};


console.log(makeChange(20));






