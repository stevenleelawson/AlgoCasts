// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
	// midpoint calc
	const mid = Math.floor((2 * n - 1) / 2);

	// define BASE CASE
	if (n === row) {
		return
	}

	//increment row
	if (level.length === 2 * n - 1) {
		console.log(level)

		// recursion bit and change arg
		return pyramid(n, row + 1)
	}

	let add;

	if (mid - row <= level.length && mid + row >= level.length) {
		add = '#'
	} else {
		add = ' '
	}

	pyramid(n, row, level + add)
}

module.exports = pyramid;
