// There is an array of strings. All strings contains similar letters except one. 
// Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]) === 'Harry Potter'

// Strings may contain spaces. Spaces are not significant, only non-spaces symbols 
// matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

function findUniq(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (!checkStr(arr[i], arr[i+1]) && !checkStr(arr[i], arr[i+2])) return arr[i];
    }

    if (!checkStr(arr[0], arr[arr.length - 2])) {
        return arr[arr.length - 2]
    } else {
        return arr[arr.length - 1]
    }
}

function checkStr(s1, s2) {
    s1 = s1.toLowerCase().replace(/ /g, '');
    s2 = s2.toLowerCase().replace(/ /g, '');

    let letterStr1 = [...new Set(s1)].sort();
    let letterStr2 = [...new Set(s2)].sort();

    return letterStr1.join('') == letterStr2.join('');
}
