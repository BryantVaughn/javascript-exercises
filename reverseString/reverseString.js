const reverseString = function (str) {
	let finalStr = '';

	for (let i = str.length - 1; i >= 0; i--) {
		finalStr += str[i];
	}
	return finalStr;
};

module.exports = reverseString;
