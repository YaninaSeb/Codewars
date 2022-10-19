// In this kata you are required to, given a string, replace every 
// letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't 
// return it.
// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    let res = [];
    text = text.toLowerCase();

    text.split('').forEach((elem, ind) => {
        let code = text.charCodeAt(ind) - 96;
        if (code > 0 && code < 27) res.push(code)
    });

    return res.join(' ');
}

