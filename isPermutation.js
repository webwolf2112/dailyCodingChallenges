const isPerm = ( str1, str2 ) => {
  if( str1.length !== str2.length ){
    return false;
  }
  
  const string1 = str1.split('').sort().join('');
  const string2 = str2.split('').sort().join('');
  
  return string1 === string2;
};

console.log( isPerm('aaabbbccc', 'abcabcabc'), 'true');

console.log( isPerm('aaabbccc', 'abcabc'), 'false');

console.log( isPerm('aaabbdccc', 'abcabc'), 'false');
