function realReverse(n) {
  let reverse = n.toString().split('').reverse().join('');
  return parseInt(reverse) * Math.sign(n);
}


//Reduce is a cool function
function reverseString(str) {
 return str.split('').reduce((val,item) => {
      return item + val;
  });
} 
