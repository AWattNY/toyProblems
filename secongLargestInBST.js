const BTNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BTNode.prototype.insertLeft = function(value) {
  this.left = new BTNode(value);
  return this.left;
};

BTNode.prototype.insertRight = function(value) {
  this.right = new BTNode(value);
  return this.right;
};

const largestInBST = (rootNode) => {
  if (!rootNode) {
    return null;
  }
  let currentNode = rootNode;
  while (currentNode) {
    if (!currentNode.right) {
      return currentNode.value;
    }
    currentNode = currentNode.value;
  }
};

const secondLargestInBST = (rootNode) => {
  if ( !rootNode || ( !rootNode.right && !rootNode.left )) {
    return null;
  }
  let currentNode = rootNode;

  while (currentNode) {
    if (!currentNode.right) {
      if (currentNode.left) {
        return secondLargestInBST(currentNode.left);
      }
      return currentNode.value;
    }
    currentNode = currentNode.right;
  } 
};
// var Root = new BTNode(5);
// var A = Root.insertLeft(3);
// var A1 = A.insertLeft(1);
// var A2 = A.insertRight(4);
// var B = Root.insertRight(8);
// var B1 = B.insertLeft(7);
// var B2 = B.insertRight(12);
// var B21 = B2.insertLeft(10);
// var B211 = B21.insertLeft(9);
// var B212 = B21.insertRight(11);

// console.log(secondLargestInBST(Root));