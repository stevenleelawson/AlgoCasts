// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	const reversedStr = str.split('').reverse().join('');
	console.log('rev', reversedStr)
	return reversedStr;
}

module.exports = reverse;
