const fibonacci = function (fibPos) {
	if (fibPos < 0) return 'OOPS';
	if (fibPos === 0) return 0;

	let a = 0;
	let b = 1;
	for (let i = 1; i < fibPos; i++) {
		let temp = b;
		b = a + b;
		a = temp;
	}
	return b;
};

module.exports = fibonacci;
