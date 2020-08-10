const repeatString = function (str, repeats) {
	if (repeats < 0) return 'ERROR';
	let finalString = '';
	for (let i = 0; i < repeats; i++) {
		finalString += str;
	}
	return finalString;
};

module.exports = repeatString;
