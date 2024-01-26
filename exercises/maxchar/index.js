// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	// STRATEGY for any prob that count or compare num of chars

	// turns str into arr to iterate over if use .forEach
	let strArr = str.split('')

	// setup obj to be used for comparisons
	const charMap = {}

	for (let char of str) {
		if (!charMap[char]) {
			charMap[char] = 1
		}

		charMap[char]++
	}

	console.log('charrrr', charMap)
}

module.exports = maxChar;
