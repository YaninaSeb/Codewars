// Assume "#" is like a backspace in string. This means that 
// string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""

function cleanString(s) {
    if (!s.includes('#')) {
        return s;
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s[i] == '#') {
                let startInd = (i == 0) ? 0 : i-1;
                let newStr = s.slice(0, startInd) + s.slice(i+1)
                return cleanString(newStr);
            }
        }
    }
}
