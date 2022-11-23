// Similar to the previous kata, but this time you need to operate with shuffled strings 
// to identify if they are composed repeating a subpattern
// Since there is no deterministic way to tell which pattern was really the original one 
// among all the possible permutations of a fitting subpattern, return a subpattern with 
// sorted characters, otherwise return the base string with sorted characters (you might 
// consider this case as an edge case, with the subpattern being repeated only once and 
// thus equalling the original input string).

// For example:
// hasSubpattern("a") === "a"; //no repeated pattern, just one character
// hasSubpattern("aaaa") === "a"; //just one character repeated
// hasSubpattern("abcd") === "abcd"; //base pattern equals the string itself, no repetitions
// hasSubpattern("babababababababa") === "ab"; //remember to return the base string sorted
// hasSubpattern("bbabbaaabbaaaabb") === "ab"; //same as above, just shuffled

function hasSubpattern(string){
    let sortStr = string.split('').sort().join('');
    let repeatSymbols = sortStr.match(/(.)\1*/g);

    let countGroup = findCommonDivisor(repeatSymbols);

    if (countGroup == 1) return sortStr;

    let res = repeatSymbols.map((elem) => elem[0].repeat(elem.length/countGroup));

    return res.sort().join('')
}

function findCommonDivisor(symbols) {
    let countRepeating = symbols.map((elem) => elem.length)
    let minNum = Math.min(...countRepeating);

    for (let i = minNum; i > 0; i--) {
        let isFind = countRepeating.every((elem) => elem % i == 0);
        if (isFind) return i
    }

    return 1;
}
