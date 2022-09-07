"use strict";
/**
 *
 * 	Part 1 – Flattening an array
    ⏱ We estimate that this should take approximately 30 minutes, but please take as much or as little time as you need.

    Write an algorithm to flatten an arbitrarily nested array of values.

    [ 1, [ 2, [ 3 ] ], 4 ] -> [ 1, 2, 3, 4 ]
    If your language of choice includes a flattening function, please implement your own.
 *
 */
exports.__esModule = true;
exports.flatArray = void 0;
function flatArray(array, newArray) {
    if (newArray === void 0) { newArray = []; }
    var result = newArray;
    if (!(array === null || array === void 0 ? void 0 : array.length) || !Array.isArray(array))
        return result;
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        // Check for null or undefined values
        if (element === null ||
            element === undefined)
            continue;
        // If value is a nested array flatArray again, if not, adds on result array
        Array.isArray(element) ? flatArray(element, newArray) : result.push(element);
    }
    return result;
}
exports.flatArray = flatArray;
