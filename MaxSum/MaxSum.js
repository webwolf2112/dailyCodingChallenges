let maxSum = (arr) => {
	let currentMax = 0;
	let sum = 0;

	for(let item in arr) {
		currentMax = Math.max(0, currentItem + item);
		sum = Math.max(sum, currentMax);
	}

	return sum;
}