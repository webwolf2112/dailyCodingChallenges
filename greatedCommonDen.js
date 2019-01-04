//Euclidean algorithm
// largestNumber = smallestNumber * (howmany times small number goes into large) + remainder
      //smallestNumber = remainder * (how many times smaller number goes into large) + remainder
          ////smallestNumber = remainder * (how many times smaller number goes into large) + remainder
            /// when the remainder = 0 it is the smallest number that is returned.

function GCD(num1, num2) {
    const largest = num1 > num2 ? num1: num2;
    const smallest = num1 < num2 ? num1: num2;

    // recursive helper function
   function calculateRemainder(largeNum, smallNum) {
       const remainder = largeNum % smallNum;
       if (remainder === 0) {
         return smallNum;  
       } 
       return calculateRemainder(smallNum, remainder);

   }

  return calculateRemainder(largest, smallest);

}