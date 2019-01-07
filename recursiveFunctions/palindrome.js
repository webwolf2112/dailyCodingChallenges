// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
  if(str.length === 1 || str.length === 0) {
      return true;
  }
  if(str.charAt(0) !== str.charAt(str.length-1)) {
      return false;
  }
  return isPalindrome(str.slice(1, str.length -1));
}


//OR cleaner solution
function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
