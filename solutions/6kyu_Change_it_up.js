// Create a function that takes a string as a parameter and does 
// the following, in this order:
// - Replaces every letter with the letter following it in the alphabet 
// (see note below)
// - Makes any vowels capital
// - Makes any consonants lower case

// Note:
// - the alphabet should wrap around, so Z becomes A
// - in this kata, y isn't considered as a vowel.

// So, for example the string "Cat30" would return "dbU30" 
// (Cat30 --> Dbu30 --> dbU30)


function changer(str) {
    str = str.toLowerCase();
    let res = '';

    for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            let charCode = str[i].charCodeAt(0) + 1;
            let letter = String.fromCharCode(charCode);

            if (!/[a-zA-Z]/.test(letter)) letter = 'a';
            if (/[aeiou]/.test(letter)) letter = letter.toUpperCase();
    
            res += letter;
        } else {
            res += str[i];
        }
    }

    return res;
}
