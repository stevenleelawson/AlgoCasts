// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// slice style
function chunk(array, size) {
	// create array to store array chunks
	const chunked = [];

	//create idx var
	let i = 0;

	while (i < array.length) {
		const arrSlice = array.slice(i, i + size);

		chunked.push(arrSlice);

		// move to next index
		i+=size;

		// !!
	}
	
	return chunked;
}
// solution one

// function chunk(array, size) {
// 	// create array to store array chunks
// 	const chunked = [];

// 	for (let elem of array) {
// 		// create last var to look at last elem in chunked arr (which is an arr we create below)
// 		const last = chunked[chunked.length - 1];

// 		if (!last || last.length === size) {
// 			// last is the last most recently created arr in chunked [elem]
// 			chunked.push([elem])
// 		} else {
// 			last.push(elem)
// 		}
// 	}
// 	return chunked;
// }

module.exports = chunk;
