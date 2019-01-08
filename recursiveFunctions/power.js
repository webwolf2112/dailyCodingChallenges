function power(base, exp){
    let currentTotal =  base;
    
  function multiply(base, exp) {
      exp -= 1;
      if(exp === 0) return;
      currentTotal = base * currentTotal;
    return multiply(base, exp);
  }

 
    if(exp === 0) {
        currentTotal = 1;
    } else {
        multiply(base, exp);
    }
  
  return currentTotal;
}

//power(1,0) returns 1
//power(2,2) returns 4
//power(2,4) returns 16

// Recursive

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}