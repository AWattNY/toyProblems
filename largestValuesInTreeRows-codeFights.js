// You have a binary tree t. Your task is to find the largest value in each row of 
// this tree. In a tree, a row is a set of nodes that have equal depth. For example,
 // a row with depth 0 is a tree root, a row with depth 1 is composed of the root's 
 // children, etc.

// Return an array in which the first element is the largest value in the row with 
// depth 0, the second element is the largest value in the row with depth 1, the third
 // element is the largest element in the row with depth 2, etc.

// Example

// For

// t = {
//     "value": -1,
//     "left": {
//         "value": 5,
//         "left": null,
//         "right": null
//     },
//     "right": {
//         "value": 7,
//         "left": null,
//         "right": {
//             "value": 1,
//             "left": null,
//             "right": null
//         }
//     }
// }
// the output should be largestValuesInTreeRows(t) = [-1, 7, 1].

// The tree in the example looks like this:

//     -1
//    / \
//   5   7
//        \
//         1
// In the row with depth 0, there is only one vertex - the root with value -1;
// In the row with depth 1, there are two vertices with values 5 and 7, so the largest 
// value here is 7;
// In the row with depth 2, there is only one vertex with value 1.


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
const largestValuesInTreeRows = (t) => {
  let results = [];
  let level = 0;
  let q = new Queue();
  q.enqueue({ 'node': t, level});
  while ( q.size() !== 0 ) {
    let dequeued = q.dequeue();
    let currentNode = dequeued.node;
    let level = dequeued.level;
    if ( currentNode ) {
      if ( results[level] ) {
        results[level] = Math.max(results[level], currentNode.value);
      } else {
        results[level] = currentNode.value;
      }
      level++;
      q.enqueue({ 'node': currentNode.left, level});
      q.enqueue({ 'node': currentNode.right, level});
    }  
    
  }
  return results;
};
