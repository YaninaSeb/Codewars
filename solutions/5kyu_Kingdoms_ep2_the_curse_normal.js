function translate(speech, vocabulary) {
    let arrWord = speech.split(' ');
    let res = [];
    let i = 0;

    while (arrWord.length !== 0) {
        let re = new RegExp(arrWord[i].replace(/[.,?!]/g, '').replace(/[*]/g, '[a-zA-Z]'));
        let options = vocabulary.filter((item) => re.test(item));
        if (options.length === 1) {
            res[i] = options[0].length == arrWord[i].length ? options[0] : options[0] + arrWord[i].slice(options[0].length);
            vocabulary.splice(vocabulary.indexOf(options[0]), 1);
            arrWord.splice(i, 1)
        }
        console.log(arrWord[i], options, vocabulary, arrWord, res)

        i = (i + 1 >= arrWord.length) ? 0 : i+1;
    }

    return res.join(' ');
}

console.log(translate("*** **** **s *****n, f** **e *r* m***!", ["mmy", "name", "iss", "legion", "for", "wwe", "are", "many"]))

//"mmy name iss legion, for wwe are many!"],