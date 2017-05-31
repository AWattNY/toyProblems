//delete middle 
//implement an algo to delete a node in the middle (any node but the first and last node)
//of a singly linked list given only access to that node 

// A -> B -> C -> D -> E -> F

var Node = function(value) {
  return { value: value, next: null };
};

const deleteNode = function(node) {
  if ( node === null || node.next === null ) {
    return false;
  }
  const nextNode = node.next;
  node.value = nextNode.value;
  node.next = nextNode.next;
  return true;   
};

// unit tests 
var nodeA = Node('A');
var nodeB = nodeA.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');

var assert = function(actualValue, expectedValue, failureStatement) {
  if ( actualValue === expectedValue ) {
    console.log('Test Passed');
		
  } else {
    console.log(failureStatement);	
  }
};

var actualValue = deleteNode(nodeC);

assert(actualValue, true, 'should return true if node succesfully removed');

var actualValue = deleteNode(null);

assert(actualValue, false, 'should return false if node is null or node is last node');

var LinkedListcontains = function(target) {
  var currentNode = nodeA;
  while ( currentNode ) {
    if ( currentNode.value === target ) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

assert(LinkedListcontains(nodeC), false, 'should return false for nodes that were removed');

