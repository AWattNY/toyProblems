const BinaryHeap = require('./binaryHeapClassical');

class Node {
  constructor(i, j) {
    this.i = i;
    this.j = j;
  }
}


const kthSmallestSum = (arr1, arr2, k) => {
  const n = arr1.length;
  const m = arr2.length;
  if ( m > n ) {
    return kthSmallestSum(arr2, arr1, k);
  }
  if ( k > n * m ) {
    return null;
  }
  let BH = new BinaryHeap(node => arr1[node.i] + arr2[node.j]);
  const firstNode = new Node(0, 0);
  BH.push(firstNode);
  let i = 1;
  while ( i < n && BH.size() <= k ) {
    console.log(BH);
    for ( var j = 0; j < i && j < m; j++ ) {
      BH.push(new Node(i, j));
      if ( i < m ) {
        BH.push(new Node(j, i));
      }

      if ( BH.size() > k ) {
        break;
      }
    }
    if ( i < m ) {
      BH.push(new Node(i, i));
    }
    i++;
  }
  console.log(BH);
  let index = 1;
  while ( index < k ) {
    BH.pop();
    index++;
  }
  let result = BH.pop();
  return { node: result, sum: arr1[result.i] + arr2[result.j]};
};


A = [ 1, 3, 5, 7, 9];
B = [ 1, 2, 4];
console.log(kthSmallestSum(A, B, 1));