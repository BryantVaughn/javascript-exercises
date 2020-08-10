const removeFromArray = function (arr, ...removeEl) {
	const finalArr = arr.filter((el) => {
		return removeEl.indexOf(el) === -1;
	});

	return finalArr;
};

module.exports = removeFromArray;
