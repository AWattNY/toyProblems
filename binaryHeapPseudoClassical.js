const BinaryHeap = function(scoreFunction) {
  this.storage = [];
  this.scoreFunction = scoreFunction;
};

BinaryHeap.prototype.push = function(element) {
  this.storage.push(element);
  this.bubbleUp(this.storage.length - 1);
};

BinaryHeap.prototype.pop = function() {
  const result = this.storage[0];
  const last = this.storage.pop();
  if ( this.storage.length > 0 ) {
    this.storage[0] = last;
    this.sinkDown(0);
  }
  return result;
};

BinaryHeap.prototype.size = function(element) {
  return this.storage.length;
};

BinaryHeap.prototype.bubbleUp = function(n) {
  const element = this.storage[n];
  const score = this.scoreFunction;
  while ( n > 0 ) {
    const parentIndex = Math.floor((n + 1) / 2) - 1;
    const parentValue = this.storage[parentIndex];
    if ( score(parentValue) <= score(element) ) {
      break;
    }
    this.storage[n] = parentValue;
    this.storage[parentIndex] = element;
    n = parentIndex;  
  }  
};

BinaryHeap.prototype.sinkDown = function(n) {
  const length = this.storage.length;
  const element = this.storage[n];
  const score = this.scoreFunction;
  
  let child1Value;
  let child2Value;
  while ( true ) {
    let swapIndex = null;
    let child1Index = (n + 1) * 2;
    let child2Index = child1Index - 1;
    if ( child1Index < length ) {
      child1Value = this.storage[child1Index];
      if ( score(child1Value) < score(element) ) {
        swapIndex = child1Index; 
      }
    }
    if ( child2Index < length ) {
      child2Value = this.storage[child2Index];
      let compareToValue = ( swapIndex === null ) ? element : child1Value; 
      if ( score(child2Value) < score(compareToValue) ) {
        swapIndex = child2Index; 
      }  
    }
    if ( swapIndex === null ) {
      break;
    }
    this.storage[n] = this.storage[swapIndex];
    this.storage[swapIndex] = element;
    n = swapIndex; 
  }

};