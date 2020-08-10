const sumAll = function (a, b) {
	if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number')
		return 'ERROR';

	let sum = 0;
	let min = Math.min(a, b);
	let max = Math.max(a, b);

	for (let i = min; i <= max; i++) {
		sum += i;
	}
	return sum;
};

module.exports = sumAll;
