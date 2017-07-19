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
  if ( k > n * m ) {
    return null;
  }
  let BH = new BinaryHeap(node => arr1[node.i] + arr2[node.j]);
  const firstNode = new Node(0, 0);
  BH.push(firstNode);
  let i = 1;
  while ( i < n && BH.size() <= k ) {
    for ( var j = 0; j < i; j++ ) {
      BH.push(new Node(i, j));
      BH.push(new Node(j, i));
      if ( BH.size() > k ) {
        break;
      }
    }
    BH.push(new Node(i, j));
    i++;
  }
  let index = 1;
  while ( index < k ) {
    BH.pop();
    index++;
  }
  let result = BH.pop();
  return { node: result, sum: arr1[result.i] + arr2[result.j]};
};

A = [ 1, 3, 5];
B = [ 1, 2, 4];
console.log(kthSmallestSum(A, B, 9));