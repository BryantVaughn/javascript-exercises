const removeFromArray = function (arr, ...removeEl) {
	return arr.filter((el) => {
		return !removeEl.includes(el);
	});
};

module.exports = removeFromArray;
