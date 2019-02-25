// validate a string of brackets to ensure each one has matching closing brackets

let bracketValidator(str) {
	const brackets = {
        '(' : ')',
        '{' : '}',
        '[': ']'
    };
    let opening = [];

    for(let b of str) {
    	//populate the opening brackets array
    	if(brackets[b]) {
    		opening.push(b);
    	} else {
    		// check that the last item in the opening array's matching bracket is the current bracket
    		if(brackets[opening[opening.length - 1]] === b) {
    			// if it is pop out the last item of the array and continue the looping
    			opening.pop();
    		} else {
    			// if it is not return false becuase the string is not valid
    			return false;
    		}	
    	}

    }

    // return true unless there are still items in the opening array
    return (opening.length === 0);
}
