const words = [
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'canoffee',
  'danoffee',
  'engender',
  'fngender',
  'karpatka',
  'othellolagkage',
  'othfllolagkage',
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xbnoepist',
  'xenoepist',
  'xfnoepist'

];

const findRotationPoint = (array) => {
  let lo = 0;
  let hi = array.length - 1;
  if ( array[lo] < array[hi] ) {
    return array[0];
  }
  let mid;
  while ( lo <= hi ) {
    mid = Math.floor((lo + hi) / 2);
    console.log('lo: ', lo, 'hi: ', hi, array[mid]);
    if ( array[mid] < array[mid - 1] ) {
      return array[mid];
    } 
    if ( array[mid] >= array[lo] ) {
      lo = mid;
    } else {
      hi = mid;
    } 
  }
};

console.log(findRotationPoint(words));