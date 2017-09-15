// Given a binary tree of integers t, return its node values in the following format:

// The first element should be the value of the tree root;
// The next elements should be the values of the nodes at height 1 (i.e. the root children),
 // ordered from the leftmost to the rightmost one;
// The elements after that should be the values of the nodes at height 2 (i.e. the children
 // of the nodes at height 1) ordered in the same way;
// Etc.
// Example

// For

// t = {
//     "value": 1,
//     "left": {
//         "value": 2,
//         "left": null,
//         "right": {
//             "value": 3,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "value": 4,
//         "left": {
//             "value": 5,
//             "left": null,
//             "right": null
//         },
//         "right": null
//     }
// }
// the output should be
// traverseTree(t) = [1, 2, 4, 3, 5].

// This t looks like this:

//      1
//    /   \
//   2     4
//    \   /
//     3 5

class Queue {
  constructor() {
    this._storage = {};
    this._start = 0;
    this._end = 0;
  }


  enqueue (value) {
    this._storage[this._end++] = value;
  }

  dequeue () {
    // This does some unnecessary work sometimes. Can you spot why?
    var result = this._storage[this._start];
    delete this._storage[this._start];

    this.size() && this._start++;

    return result;
  }

  size () {
    return this._end - this._start;
  }

  peek () {
    return this._storage[this._start];
  }
}

class Tree {
  constructor (x) {
    this.value = x;
    this.left = null;
    this.right = null;
  }
}
const traverseTree = (t) => {
  let results = [];
  let q = new Queue();
  q.enqueue(t);
  while ( q.size() !== 0 ) {
    let currentNode = q.dequeue();
    if ( currentNode ) {
      results.push(currentNode.value);
      q.enqueue(currentNode.left);
      q.enqueue(currentNode.right);
    }  
    
  }
  return results;
};
