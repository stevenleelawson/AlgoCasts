// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	// ITERATIVE SOLUTION NUMBER ONE
	// this loop is for the 'row'
	for (let row = 0; row < n; row++) {
		// create a var to hold the #s
		let stair = ''
		// for loop for the 'column;
		for (let col = 0; col < n; col++) {
			// IF the current column is equal to or less than the current row, add a '# to stair
			if (col <= row) {
				stair += '#'
			} else {
				stair += ' '
			}

		}
		console.log(stair)
	}
}

module.exports = steps;
