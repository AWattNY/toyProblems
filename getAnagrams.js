const getAllAnagrams = (string) => {
  let hashMap = new Map();
  (function getAnagrams( anagram, str ) {
    if ( str === '' ) {
      hashMap.set(anagram, anagram);
    }
    for ( var i = 0; i < str.length; i++ ) {
      getAnagrams(anagram + str.charAt(i), str.slice(0, i) + str.slice(i + 1));
    }
  })('', string);
  return Array.from(hashMap.keys()); 
};




console.log(getAllAnagrams('abc'));
