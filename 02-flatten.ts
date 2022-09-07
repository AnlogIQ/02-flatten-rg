/**
 * 
 * 	Part 1 – Flattening an array
	⏱ We estimate that this should take approximately 30 minutes, but please take as much or as little time as you need.

	Write an algorithm to flatten an arbitrarily nested array of values.

	[ 1, [ 2, [ 3 ] ], 4 ] -> [ 1, 2, 3, 4 ]
	If your language of choice includes a flattening function, please implement your own.
 * 
 */

export function flatArray(array:any[], newArray:any[] = []) {
	let result = newArray

	if(!array?.length || !Array.isArray(array)) return result;

	for (let i = 0; i < array.length; i++) {
		const element = array[i]

		// Check for null or undefined values
		if(
			element === null || 
			element === undefined
		) continue

		// If value is a nested array flatArray again, if not, adds on result array
		Array.isArray(element) ? flatArray(element, newArray) : result.push(element)
	}

	return result
}