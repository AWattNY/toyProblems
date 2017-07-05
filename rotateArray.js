const rotateArray = (arr, n) => {
  const reverse = (lo, hi) => {
    while ( lo < hi ) {
      let temp = arr[hi];
      arr[hi] = arr[lo];
      arr[lo] = temp;
      lo++;
      hi--;  
    } 
  };
  let len = arr.length;
  n = n % len;
  if ( n < 0 ) {
    n = n + len;
  }
  reverse(0, len - 1);
  reverse(0, n - 1);
  reverse(n, len - 1);  
};