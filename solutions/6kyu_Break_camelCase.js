// Complete the solution so that the function will break up camel 
// casing, using a space between words.

function solution(string) {
    let res = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            res += ' ';
        }
        res += string[i];
    }

    return res
}
