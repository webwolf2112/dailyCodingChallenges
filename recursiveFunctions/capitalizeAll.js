function capitalizeWords (arr) {
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 0) return arr;
  let Capitalized = arr.shift();
  return [Capitalized.toUpperCase(), ...capitalizeWords(arr)];
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
