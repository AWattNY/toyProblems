Array.prototype.isSubsetOf = function(array) {
  let hashMap = new Map();
  array.forEach(element => hashMap.set(element, true));

  return this.reduce((accu, curr) => {
    if ( !hashMap.has(curr) ) {
      accu = false;
    } 
    return accu; 
  }, true);
  
};

console.log([1, 'cat', 3].isSubsetOf([4, 'cat', 1]));