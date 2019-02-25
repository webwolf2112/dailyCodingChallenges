const fizzBuzz(n) => {
	for(let i = 0; i <= n; i++) {
		let consoleString = '';

		if(i % 3 === 0) consoleString += 'Fizz ';
		if(i % 5 === 0) consoleString += 'Buzz';
		console.log(consoleString);
	}
}