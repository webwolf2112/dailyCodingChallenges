//Write a recursive function that capitalizes the first letter.

function capitalizeFirst (arr){
    if(arr.length === 0) return arr;
    let Capital = arr.shift().split('');
    Capital[0] = Capital[0].toUpperCase();
    
    return [Capital.join(''), ...capitalizeFirst(arr)];

}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
