// Write a function that will check if two given characters are 
// the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

function sameCase(a, b){
    let str = a + b;

    if (/[a-z]{2}/.test(str) || /[A-Z]{2}/.test(str)) return 1
    if (/[a-z]{1}[A-Z]{1}/.test(str) || /[A-Z]{1}[a-z]{1}/.test(str)) return 0;

    return -1;
}
