const ftoc = function (fTemp) {
	return Math.round((((fTemp - 32) * 5) / 9) * 10) / 10;
};

const ctof = function (cTemp) {
	return Math.round(((cTemp * 9) / 5 + 32) * 10) / 10;
};

module.exports = {
	ftoc,
	ctof
};
