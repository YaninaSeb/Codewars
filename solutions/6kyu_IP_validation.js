// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
// IPs should be considered valid if they consist of four octets, with values 
// between 0 and 255, inclusive.

// Valid inputs examples:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5

// Notes:
// -Leading zeros (e.g. 01.02.03.04) are considered invalid
// -Inputs are guaranteed to be a single string


function isValidIP(str) {
    let arr = str.split('.');
    let len = arr.length
    if (len != 4) return false;

    for (let i = 0; i < len; i++) {
        let num = +arr[i];
        if (num > 255 || num < 0 || num.toString() != arr[i]) return false;
    }

    return true
}
