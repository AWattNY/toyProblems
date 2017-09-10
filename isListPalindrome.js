// Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.

// Given a singly linked list of integers, determine whether or not it's a palindrome.

// Example

// For l = [0, 1, 0], the output should be
// isListPalindrome(l) = true;
// For l = [1, 2, 2, 3], the output should be
// isListPalindrome(l) = false.

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
const isListPalindrome = (l) => {
  const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
  }; 
  let size = 0;
  let node = l;
  let index = 1;
  let llToString = '';
  let mid;
  let even;
  while ( node ) {
    size++;
    node = node.next;
  }
  if ( size === 1 ) {
    return true;
  }
  mid = Math.floor( size / 2 );
  even = ( size % 2 === 0 ) ? true : false;
  node = l;
  while ( index <= mid ) {
    llToString += node.value.toString();
    node = node.next;
    index++;
  }
  if ( !even ) {
    llToString += node.value.toString();
    node = node.next;
  }
  while ( node ) {
    let value = node.value;
    if (value >= 0 ) {
      value = value.toString().split('').reverse().join('');  
    } else {
      value = Math.abs(value).toString().split('').reverse().join('') + '-'; 
    }
    llToString += value; 
    node = node.next;
  }
  return isPalindrome(llToString);
};


