// In this kata you are given a string for example:

// "example(unwanted thing)example"

// Your task is to remove everything inside the parentheses 
// as well as the parentheses themselves.

// The example above would return:

// "exampleexample"

// Notes
// - Other than parentheses only letters and spaces can occur 
// in the string. Don't worry about other brackets like "[]" 
// and "{}" as these will never appear.
// - There can be multiple parentheses.
// - The parentheses can be nested.

function removeParentheses(s){
    let firstInd;

    for (let ind = 0; ind < s.length; ind++) {
        if (s[ind] == '(') {
            firstInd = ind;
        } else if (s[ind] == ')') {
            let newStr = s.slice(0, firstInd) + s.slice(ind + 1);
            return removeParentheses(newStr);
        }
    }

    return s;
}
