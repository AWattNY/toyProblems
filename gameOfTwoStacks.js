const equalStacks = (g, data) => {
  let results = [];
  for (var index = 0; index < g; index++) {
    var n = data[index][0];
    var m = data[index][1];
    var x = data[index][2];
    a = data[index][3].split(' ');
    a = a.map(Number);
    b = data[index][4].split(' ');
    b = b.map(Number);
    let indexB = 0;
    let indexA = 0;
    let total = 0;
    let score = 0;
    while ( indexB < m && ( total + b[indexB] <= x ) ) {
      total += b[indexB];
      indexB++;
    }
    score = indexB;
    while ( indexA < n ) {
      total += a[indexA];
      while ( total > x && indexB > 0 ) {
        indexB--;
        total -= b[indexB];
            
      }
      if ( total > x ) {
        break;
      }
        
      score = Math.max(score, indexA + 1 + indexB);
      indexA++;
    }
    results.push(score);   
  }
};