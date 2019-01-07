//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040


//Recursive with helper function

function factorial(fact){
    let returnNumber = 1;
       
    if(fact === 0) {
        return returnNumber;
    }
    
    
    function recursiveFact(num) {
        if(num === 0) return;
        returnNumber = returnNumber * num;
        return recursiveFact(num-1);
    }
    
    recursiveFact(fact);
    
    return returnNumber;
   
}

//Recursive without helper function

function factorial(fact, runningTotal = 1) {
    if(fact === 0) return runningTotal;
    return factorial((fact - 1), (fact * runningTotal));
}

//Best recursive solution
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
