const findRoot = (arr) => {
  let hash = new Map();
  for ( var i = 0; i < arr.length; i++ ) {
    hash.set(arr[i], true);
  }
  console.log(arr);
  console.log(hash);
  for ( var [key, value] of hash ) {
    console.log(hash);
    if ( key.left ) {
      hash.delete(key.left);
    }
    if ( key.right ) {
      hash.delete(key.right);
    }
  }
  console.log(hash);
  if ( hash.size === 1 ) {
    return Array.from(hash.keys())[0];
  }
  return null;
};
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const E = new Node('E');
const F = new Node('F');
const G = new Node('G');
const H = new Node('H');
A.left = B;
A.right = C; 
B.left = E;
C.left = F;
F.right = H;
F.left = G;



var nodes = [B, C, E, F];

console.log(findRoot(nodes));