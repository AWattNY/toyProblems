var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

const telephoneWords = ( digits ) => {
  let words = [];
  (function lettersForDigits( word, digits ) {
    if ( digits === '' ) {
      words.push(word);
      return;
    } 
    let letters = phoneDigitsToLetters[digits[0]].split('');
    letters.forEach( char => lettersForDigits(word + char, digits.slice(1))); 
  })('', digits);

  return words;
};

console.log(telephoneWords('562'));