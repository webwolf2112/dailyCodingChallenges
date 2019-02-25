const flattenArray = (arr) => {
	let flattened = [];

	for(let item of arr) {
		if(Array.isArray(item)) {
			flattened.push(...flattenArray(item));

		} else {
			flattened.push(item);
		}
	}

	return flattened;
};