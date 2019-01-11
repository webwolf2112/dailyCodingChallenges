// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
// Follow-up: Can you do this in O(N) time and constant space?

//brute force

function maxSum(arr) {
	let included = arr[0];
	let excluded = 0;
	let execluded_new; 
    let i; 

	for(i = 1; i < arr.length; i++) {
		// current max excluding i 
		 execluded_new = (included > excluded)? included: excluded; 
  
	    // current max including i  
	    included = excluded + arr[i]; 
	    excluded = execluded_new; 
	}
	// return max of incl and excl 
	return (included > excluded)? included : excluded;

}
