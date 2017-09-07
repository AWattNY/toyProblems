class LinkedListNode {
  constructor (value) {
    this.value = value;
    this.next = null;
  }  
}

const reverseLL = (head) => {
    
  let previous = null;
  let current = head;
  while ( current ) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;  
  }
  return previous;
};

// var A = new LinkedListNode('A');
// var B = new LinkedListNode('B');
// var C = new LinkedListNode('C');
// var D = new LinkedListNode('D');
// A.next = B;
// B.next = C;
// C.next = D;
// let Z = new LinkedListNode('Z');
// let newHead = reverseLL(Z);
// console.log(newHead);
// console.log(newHead.next);
// console.log(newHead.next.next);
// console.log(newHead.next.next.next);