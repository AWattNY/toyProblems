import Stack from './stack';

class InorderIterator {
  constructor(node) {
    this.stack = new Stack();
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }
  hasNext() {
    return (this.stack.size() === 0) ? false : true;   
  }
  getNext() {
    if (this.stack.size() === 0) {
      return null;
    }
    let next = this.stack.pop();
    let node = next.right;
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
    return next;
  }

}