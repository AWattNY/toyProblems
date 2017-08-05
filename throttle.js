throttle = (func, wait) => {

  var called = false;

  return (...args) => {
    if ( !called ) {
      called = true;
      console.log('function was called');
      func(...args);

      setTimeout(() => flag = false, wait);
    }
  };
};

throttle2 = (func, n, wait) => {

  var timesRemaining = n;
  var timeLimitReached = false;
  setTimeout(() => {
    timeLimitReached = true;
  }, wait);
  return (...args) => {

    if ( !timeLimitReached && timesRemaining > 0 ) {
      timesRemaining--;
      console.log('function was called');
      func(...args);

      
    } 
    if ( timeLimitReached ) {
      timeLimitReached = false;
      timesRemaining = n - 1;
      func(...args);
      setTimeout(() => {
        timeLimitReached = true;
      }, wait);
    }
  };
};

const add = (x, y) => console.log(x + y);
// const delayedAdd = throttle( add, 5000);
// console.log(delayedAdd(2, 5));
// console.log(delayedAdd(12, 5));
// setTimeout(function() { console.log(delayedAdd(20, 5)); }, 3000);
// setTimeout(function() { console.log(delayedAdd(30, 5)); }, 6000);
const limitedAdd = throttle2(add, 5, 5000);
console.log(limitedAdd(1, 1));
console.log(limitedAdd(10, 2));
console.log(limitedAdd(10, 3));
console.log(limitedAdd(10, 4));
console.log(limitedAdd(10, 5));
console.log(limitedAdd(10, 6));
setTimeout(function() { 
  console.log(limitedAdd(10, 7)); 
  console.log(limitedAdd(10, 8));
  console.log(limitedAdd(10, 9));
  console.log(limitedAdd(10, 10));
  console.log(limitedAdd(10, 11));
  console.log(limitedAdd(10, 12));
}, 5001);

setTimeout(function() { 
  console.log(limitedAdd(10, 13)); 
  console.log(limitedAdd(10, 14));
  console.log(limitedAdd(10, 15));
  console.log(limitedAdd(10, 16));
  console.log(limitedAdd(10, 17));
  console.log(limitedAdd(10, 18));
}, 10020);

