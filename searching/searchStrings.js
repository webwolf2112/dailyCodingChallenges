// Find the string within the array
// ex ["dog", "dogggies", "doggos", "doah"]  - returns ["dog", "doggies", "doggos"]

function seachString(arr, str) {
	let found = [];
	for(var i = 0;  i < arr.length; i++;) {
		if(arr[i].indexOf(str) === 0) {
			found.push(arr[i]);
		}
	}

	return found;
}