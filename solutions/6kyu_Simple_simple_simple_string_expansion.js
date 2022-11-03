// Given a string that includes alphanumeric characters ("3a4B2d") return the expansion of 
// that string: The numeric values represent the occurrence of each letter preceding that 
// numeric value. There should be no numeric characters in the final string.

// Notes
// - The first occurrence of a numeric value should be the number of times each character 
// behind it is repeated, until the next numeric value appears
// - If there are multiple consecutive numeric characters, only the last one should be 
// used (ignore the previous ones)
// - Empty strings should return an empty string.

// Your code should be able to work for both lower and capital case letters.

function stringExpansion(s) {
    let res = '';
    let count = 1;

    for (let i = 0; i < s.length; i++) {
        if (/[0-9]/g.test(s[i])) {
            count = s[i];
        } else {
            res += s[i].repeat(count);
        }
    }

    return res;
}
