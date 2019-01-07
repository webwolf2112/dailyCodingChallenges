// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].


function productOfArray(arr) {
    let returnSum = [];
    for(var i = 0; i < arr.length; i++) {
        let product = 1;

        for(var k = 0; k < arr.length; k++) {
            if(i !== k) {
                product = product * arr[k];
            }
        }
        if(product !== 1) {
            returnSum.push(product);
        }
    }
    console.log(returnSum);
}

let testArray = [1,2,3, 4,5];
let testArray2 = [3,2,1];

productOfArray(testArray);
productOfArray(testArray2);