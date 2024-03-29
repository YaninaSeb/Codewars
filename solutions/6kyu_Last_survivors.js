// Substitute two equal letters by the next letter of the alphabet 
// (two letters convert to one):
// "aa" => "b", "bb" => "c", .. "zz" => "a".

// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.

// Example:
// let str = "zzzab"
//     str = "azab"
//     str = "bzb"
//     str = "cz"
// return "cz"

// Notes
// - The order of letters in the result is not important.
// - The letters "zz" transform into "a".
// - There will only be lowercase letters.


function lastSurvivors(str) {
    if (str.length == new Set(str).size) {
        return str;
    } else {
        for (let i = 0; i < str.length; i++) {
            if (i !== str.lastIndexOf(str[i])) {
                let code = str[i] === 'z' ? 'a'.charCodeAt(0) : str[i].charCodeAt(0) + 1;
                let newLetter = String.fromCharCode(code);
                let newStr = str
                    .replace(str[i], newLetter)
                    .replace(str[i], '');

                return lastSurvivors(newStr);
            }
        }
    }
}
