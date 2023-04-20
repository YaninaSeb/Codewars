function translate(speech, vocabulary) {
    let arrWord = speech.split(' ');
    let res = [];
    let i = 0;

    while (arrWord.length !== 0) {
        let re = new RegExp(arrWord[i].replace(/[.,?!]/g, '').replace(/[*]/g, '[a-zA-Z]'));
        let options = vocabulary.filter((item) => re.test(item));
        if (options.length === 1) {
            res[i] = options[0];
            vocabulary.splice(vocabulary.indexOf(options[0]), 1);
            arrWord.splice(i, 1)
        }

        console.log(options, vocabulary, arrWord, res)
        
        i = (i + 1 >= arrWord.length) ? 0 : i+1; 
    }

    // let re = new RegExp('*c*.'.replace(/[.,?!]/g, '').replace(/[*]/g, '[a-zA-Z]'));
    // console.log(re)

    //return arrWord;
}

console.log(translate("a**? *c*. **e,", ["ace", "acd", "abd"]))