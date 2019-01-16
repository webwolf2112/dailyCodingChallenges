//First attempt  
// way to long
function numberReverse(n) {
  let isNegative = Math.sign(n);
  let reverseArray = n.toString().split('');
  var i;
  for(i=0; i<reverseArray.length; i++) {
    if(reverseArray[i] === '0' || reverseArray[i] === '-') {
      reverseArray.pop();
    } else {
      break;
    }
  }
  reverseArray.reverse();
  if(isNegative === -1) {
    reverseArray.unshift('-');
  }
  return parseInt(reverseArray.join(''));
}


//THings to Know
// Any number * -1 becomes a negative number
// ParseInt automatically removes zeros!!
// ********* Super Simple Way To do this ****** //

function realReverse(n) {
  let reverse = n.toString().split('').reverse().join('');
  return parseInt(reverse) * Math.sign(n);
}
