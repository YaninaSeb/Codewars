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
