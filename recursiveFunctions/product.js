// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if(arr.length === 1) return arr[0];
    arr.push(arr[0] * arr[1]);
    arr.splice(0, 2);
    return productOfArray(arr);
}


//Best solution
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
