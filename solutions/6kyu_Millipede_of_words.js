// The set of words is given. Words are joined if the last letter of one word 
// and the first letter of another word are the same. Return true if all words 
// of the set can be combined into one word. Each word can and must be used 
// only once. Otherwise return false.

// Input
// Array of 3 to 7 words of random length. No capital letters.

// Example true
// Set: excavate, endure, desire, screen, theater, excess, night.
// Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.

// Example false
// Set: trade, pole, view, grave, ladder, mushroom, president.
// Millipede: presidenT Trade.


function solution(words) {
    let res = []

    words.forEach((elem, ind) => {
        let arrAnotherWords = [...words];
        arrAnotherWords.splice(ind, 1);

        joinWords(elem, arrAnotherWords, res);
    });

    return res.length > 0;
}

function joinWords(word, arrWords, res) {
    if (arrWords.length == 0) {
        res.push(word);
    } else {
        let lastLetter = word[word.length - 1];

        for (let i = 0; i < arrWords.length; i++) {
            let firstLetter = arrWords[i][0];
            if (lastLetter == firstLetter){
                let newWord = word + arrWords[i];
                let newArrWords = [...arrWords];
                newArrWords.splice(i, 1);
        
                joinWords(newWord, newArrWords, res);
            }
        }
    }
}
