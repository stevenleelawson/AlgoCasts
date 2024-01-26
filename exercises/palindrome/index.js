// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	// reverse the str
	// compare to OG

	// my sol
	// const pal = str.split('').reverse().join('');
	// console.log(pal)
	// return str === pal ? true : false;

	// alt sol
	// uses array helper but makes every check twice, unefficient
	const arr = str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	})
	return arr;
}

module.exports = palindrome;
