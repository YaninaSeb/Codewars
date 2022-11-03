// You are given three integer inputs: length, minimum, and maximum.

// Return a string that:
// - Starts at minimum
// - Ascends one at a time until reaching the maximum, then
// - Descends one at a time until reaching the minimum
// - repeat until the string is the appropriate length

// Examples:
//  length: 5, minimum: 1, maximum: 3   ==>  "12321"
//  length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
//  length: 11, minimum: 5, maximum: 9  ==>  "56789876567"

// Notes:
// - length will always be non-negative
// - negative numbers can appear for minimum and maximum values
// - hyphens/dashes ("-") for negative numbers do count towards the length
// - the resulting string must be truncated to the exact length provided
// - return an empty string if maximum < minimum or length == 0
// - minimum and maximum can equal one another and result in a single number repeated for the length of the string


function ascendDescend(length, minimum, maximum) {
    if (maximum < minimum || length == 0) return '';

    if (maximum == minimum) return new Array(length).fill(minimum).join('');

    let res = '';
    let isAscend = true;
    let currentNum = minimum - 1;

    for (let i = 0; i < length; i++) {
        isAscend ? currentNum++ : currentNum--;
        res += currentNum;

        if (currentNum == maximum) isAscend = false;
        if (currentNum == minimum) isAscend = true;
    }
    return res.slice(0, length)
}
