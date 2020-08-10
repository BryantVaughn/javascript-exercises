const ftoc = function (fTemp) {
	let cTemp = (fTemp - 32) * (5 / 9);

	if (cTemp !== 0) cTemp = parseFloat(cTemp.toFixed(1));

	return cTemp;
};

const ctof = function (cTemp) {
	let fTemp = cTemp * (9 / 5) + 32;

	if (fTemp !== 0) fTemp = parseFloat(fTemp.toFixed(1));

	return fTemp;
};

module.exports = {
	ftoc,
	ctof
};
