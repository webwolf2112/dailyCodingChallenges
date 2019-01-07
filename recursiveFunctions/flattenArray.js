function flatten(arr){
  if(arr.length === 0) {
      return;
  } 
  
  let tempArray = [];
  
  for(var i = 0; i < arr.length; i++) {
      if(!Array.isArray(arr[i])) {
        tempArray.push(arr[i]);
      } else {
        tempArray.push(...flatten(arr[i]))
      }
  }
  
  return tempArray;
  
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
