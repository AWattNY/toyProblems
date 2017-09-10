const largestRectangle = (arr) => {
  let n = arr.length;
  let heightsStack = [];
  let positionsStack = [];
  let index = 0;
  let maxArea = 0;
  let top;
  let pos;
  let height;
  let area;
  heightsStack.push(arr[0]);
  positionsStack.push(index);
  index++;
  while ( index < arr.length ) {
    top = heightsStack[heightsStack.length - 1];
    if ( arr[index] > top ) {
      heightsStack.push(arr[index]);
      positionsStack.push(index);    
    } else if ( arr[index] < top ) {
      while ( arr[index] < top ) {
        pos = positionsStack.pop();
        height = heightsStack.pop();
        area = ( index - pos ) * height;
        maxArea = Math.max( area, maxArea );
        top = heightsStack[heightsStack.length - 1];
      }
      heightsStack.push(arr[index]);
      positionsStack.push(pos);
    }
    index++;
  }

  while ( heightsStack.length !== 0 ) {
    pos = positionsStack.pop();
    height = heightsStack.pop();
    area = ( index - pos ) * height;
    maxArea = Math.max( area, maxArea );
  }
  return maxArea;
};

// console.log(largestRectangle([8979, 4570, 6436, 5083, 7780, 3269, 5400, 7579, 2324, 2116]));
 console.log(largestRectangle([0, 1, 3, 4, 4]));