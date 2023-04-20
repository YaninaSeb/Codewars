// You are travelling and you see some strong villagers trying to battle 
// unsuccessfully with one skinny man. When you approach them, the peasants 
// tell you that man is the cursed priest from the village. Now he lives 
// among the tombs, cries out and nobody can understand him because he can 
// not pronounce any entire word. You decided to try to help him.

// Given the string speech and the array vocabulary. You should return a 
// string where each word in the priest's speech is replaced with the 
// appropriate word from vocabulary. After every replacement, remove the 
// appropriate word from vocabulary. Sometimes, it might seem unclear which 
// word exactly is appropriate but, after reducing the size of vocabulary, 
// there will be only one possible final answer.

// Notes:
// - Words in the priest's speech always consist of lowercase letters and at 
// least one asterisk. Each asterisk is replacing one character;
// - speech consists of these words, as described above, spaces and marks ?!,. ;
// - There might be more words in vocabulary than words in speech;
// - The length of an encoded word must be the same as an appropriate word of vocabulary;
// - The minimum length of a word is 3.

// Example:
// Given a speech "a**? *c*. **e," and a vocabulary of ["ace", "acd", "abd"], 
// the expected answer is "abd? acd. ace,".


function translate(speech, vocabulary) {
    if (speech.length == 0) return '';
    let arrWord = speech.split(' ');
    let res = [];
    let i = 0;

    while (arrWord.length !== 0) {
        let re = new RegExp('^' + arrWord[i].replace(/[.,?!]/g, '').replace(/[*]/g, '[a-zA-Z]') + '$');
        let options = vocabulary.filter((item) => re.test(item));
        if (options.length === 1) {
            let indWord = speech.split(' ').indexOf(arrWord[i]);
            res[indWord] = options[0].length == arrWord[i].length ? options[0] : options[0] + arrWord[i].slice(options[0].length);
            vocabulary.splice(vocabulary.indexOf(options[0]), 1);
            arrWord.splice(i, 1);
        }
        i = (i + 1 >= arrWord.length) ? 0 : i+1;
    }
    return res.join(' ');
}
