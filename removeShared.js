let str1 = 'abcdef';
String.prototype.removeShared = function(str2) {
  let hashMap = new Map();
  str2.split('').forEach(char => {
    if ( !hashMap.has(char) ) {
      hashMap.set(char, true);
    }
  });
  let index = 0;
  let res = '';
  while ( index < str1.length ) {
    let char = str1.charAt(index);
    if ( !hashMap.has(char) ) {
      res += this.charAt(index);
    
    }
    index++;
  }
  return res;
};

String.prototype.removeShared2 = function(str2) {
  let hashMap2 = new Map();
  str2.split('').forEach(char => {
    if ( !hashMap2.has(char) ) {
      hashMap2.set(char, 1);
    } else {
      hashMap2.set(char, hashMap2.get(char) + 1);
    }
  });
  
  let index = 0;
  let res = '';
  while ( index < this.length ) {
    let char = this.charAt(index);
    if ( !hashMap2.has(char) || hashMap2.get(char) === 0 ) {
      res += this.charAt(index);
    
    } else {
      hashMap2.set( char, hashMap2.get(char) - 1);
    }
    index++;
  }
  return res;
};


console.log('aabbbccd'.removeShared2('aaccdd'));

