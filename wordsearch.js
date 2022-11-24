const wordSearch = (letters, word) => {
	if (!letters.length) {
		return false;
	}
	const horizontalJoin = letters.map(ls => ls.join(''))
	for (l of horizontalJoin) {
		if (l.includes(word)) return true
	}
	let vertical = transpose(letters);
	const verticalJoin = vertical.map(ls => ls.join(''))
	for (l of verticalJoin) {
		if (l.includes(word)) return true
	}
	return false;
};

const transpose = function (matrix) {
	let finalMatrix = [];
	for (let i = 0; i < matrix[0].length; i++) {
		let stagingArr = [];
		matrix.forEach(e => stagingArr.push(e[i]));
		finalMatrix.push(stagingArr);
	}
	return finalMatrix;
};

module.exports = wordSearch