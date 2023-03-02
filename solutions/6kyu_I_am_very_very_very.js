// You are very very happy and very very very excited to solve this Kata.
// Show it to us by creating a function iam such as:

// iam('happy') // returns the string "I am happy"
// iam('excited') // returns the string "I am excited"
// iam()('scared') // returns the string "I am very scared"
// iam()()('interested') // returns the string "I am very very interested"

// As you understood, the function iam accept 1 optional parameter.
// If provided, the function returns a string.
// If NOT provided, it must returns a function allowing to continue the sentence.

let str = '';

function iam(input) {
    if (input !== undefined) {
        let res = `I am ${str}${input}`;
        str = '';
        return res;
    } else {
        str += 'very ';
        return iam
    }
}

console.log(iam()()()()('happy and ') + iam()()()()()()()('big and') + iam('tall'))

