//Return all even numbers in a nested object

function nestedEvenSum (obj) {
    let runningTotal = 0;
  for(let item in obj) {
      if(typeof obj[item] !== 'object' && item !== null) {
          if(obj[item] % 2 === 0 ) {
              runningTotal += obj[item];
          }
      } else if(item !== null) {
          runningTotal += nestedEvenSum(obj[item]);
      }
  }
  return runningTotal;
}
