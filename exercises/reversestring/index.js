// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// sol 1
	
	// const reversedStr = str.split('').reverse().join('');
	// console.log('rev', reversedStr)
	// return reversedStr;
	
	// sol 2

	let reversed = ''
	for (char of str) {
		reversed = char + reversed;
	}
	return reversed;

	// sol 3

	// const reversedStr = str.split('').reduce((acc, arrItem) => {
	// 	 // ACCUMULATOR 1ST!!!!!!!!!!!
	// 	debugger;
	// 	return arrItem + acc;
	// }, '')
	// return reversedStr;
}

module.exports = reverse;
