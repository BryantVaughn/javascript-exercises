function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(nums) {
	return nums.reduce((accum, curVal) => {
		return (accum += curVal);
	}, 0);
}

function multiply(nums) {
	return nums.reduce((accum, curVal) => {
		return (accum *= curVal);
	});
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(num) {
	let factorial = 1;
	for (let i = num; i > 1; i--) {
		factorial *= i;
	}
	return factorial;

	// recursive approach
	// if (num === 0) return 1;
	// return num * factorial(num - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
};
