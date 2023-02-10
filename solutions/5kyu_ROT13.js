// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. 
// Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate 
// jokes on USENET.

// For this task you're only supposed to substitute characters. 
// Not spaces, punctuation, numbers, etc.

// Test examples:
// "EBG13 rknzcyr." -> "ROT13 example."
// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

// function rot13(str) {
//     let arrNewElem = str.split('').map((elem) => {
//         if (/[a-zA-Z]/.test(elem)) {
//             let charCode = elem.charCodeAt(0) + 13;
//             if (/[A-Z]/.test(elem) && charCode > 90) charCode = charCode - 90 + 64;
//             if (/[a-z]/.test(elem) && charCode > 122) charCode = charCode - 122 + 96;
//             return String.fromCharCode(charCode);
//         } else {
//             return elem;
//         }
//     });

//     return arrNewElem.join('');
// }

function rot13(str) {
    return str.split('').map((elem) => {
        if (/[a-zA-Z]/.test(elem)) {
            return String.fromCharCode(elem.charCodeAt(0) + (elem.toLowerCase() <= 'm' ? 13 : -13));
        } else {
            return elem;
        }
    }).join('');
}
