const palindromes = function (str) {
	// My original solution
	// const letters = 'abcdefghijklmnopqrstuvwxyz';
	// const strArr = str.toLowerCase().split('');
	// const letterArr = strArr.filter((char) => {
	// 	return letters.indexOf(char) >= 0;
	// });

	// const len = letterArr.length;
	// for (let i = 0; i < len / 2; i++) {
	// 	if (letterArr[i] !== letterArr[len - i - 1]) return false;
	// }
	// return true;

	// pulled from solutions branch
	let lowercaseStr = str.toLowerCase().replace(/[^A-Za-z]/g, '');
	return lowercaseStr.split('').reverse().join('') === lowercaseStr;
};

module.exports = palindromes;
