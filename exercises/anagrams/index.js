// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	const aCharMap = buildCharMap(stringA);
	const bCharMap = buildCharMap(stringB);

	// // EDGE CASE TO check if one obj has a char that the other does not.
	// 	// => pull out all the keys and compare the two maps together
	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		return false;
	}

	// to iterate of an OBJECT use IN
	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			// if NOT we know something is wrong -- do not line up at all
			return false;
		}
	}

	return true;
}

function buildCharMap(str) {
	// 	// helper function to make char maps

	// 	// strip out any nonchars === regex
	// 	// convert all to lower with toLowerCase
	const charMap = {};

	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}

	return charMap;
}


module.exports = anagrams;
