class BinaryHeap {
  constructor(scoreFunction) {
    this.storage = [];
    this.scoreFunction = scoreFunction;
  }
  push(element) {
    this.storage.push(element);
    this.bubbleUp(this.storage.length - 1);
  }
  pop() {
    const popped = this.storage[0];
    const last = this.storage.pop();
    if ( this.storage.length > 0 ) {
      this.storage[0] = last;
      this.sinkDown(0);
    }
    return popped;
  }
  bubbleUp(n) {
    const score = this.scoreFunction;
    let element = this.storage[n];
    while ( n > 0 ) {
      let parentIndex = Math.floor((n + 1) / 2) - 1;
      let parentValue = this.storage[parentIndex];
      if ( score(parentValue) < score(element) ) {
        break;
      }
      this.storage[n] = parentValue;
      this.storage[parentIndex] = element;
      n = parentIndex;
    }
  }

  sinkDown(n) {
    const score = this.scoreFunction;
    const element = this.storage[n];
    const length = this.storage.length;
    let child1Index;
    let child2Index;
    let child1Value;
    let child2Value;
    while ( true ) {
      let swapIndex = null;
      child1Index = (n + 1) * 2;
      child2Index = child1Index - 1;
      if ( child1Index < length ) {
        child1Value = this.storage[child1Index];
        if ( score(child1Value) < score(element) ) {
          swapIndex = child1Index;
        }
      }
      if ( child2Index < length ) {
        child2Value = this.storage[child2Index];
        let valueToCompare = ( swapIndex === null ) ? element : child1Value;
        if ( score(child2Value) < score(valueToCompare) ) {
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
  }
}

