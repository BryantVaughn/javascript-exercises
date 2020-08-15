const caesar = function (str, shift) {
	return str
		.split('')
		.map((char) => shiftChar(char, shift))
		.join('');
};

// returns code for beginning of alphabet depending on capital or lowercase
const codeSet = (code) => (code < 97 ? 65 : 97);

// returns 0-25 code based on letter
const mod = (n, m) => ((n % m) + m) % m;

// returns letter shifted if alpha, otherwise returns char
const shiftChar = function (char, shift) {
	let charCode = char.charCodeAt();

	if (
		(charCode >= 65 && charCode <= 90) ||
		(charCode >= 97 && charCode <= 122)
	) {
		return String.fromCharCode(
			mod(charCode + shift - codeSet(charCode), 26) + codeSet(charCode)
		);
	}
	return char;
};

module.exports = caesar;
