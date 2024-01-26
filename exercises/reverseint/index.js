// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	// toString
	// Math.sign()
	//parseInt()

	let numString = n.toString().split('').reverse().join('');

	// or

	// if (n < 0) {
	// 	return parseInt(numString) * -1
	// }
	// return parseInt(numString)

	return parseInt(numString) * Math.sign(n)
}

module.exports = reverseInt;
