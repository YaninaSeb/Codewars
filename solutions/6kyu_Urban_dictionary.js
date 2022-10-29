// Design a data structure that supports the following two operations:

// - addWord (or add_word) which adds a word,
// - search which searches a literal word or a regular expression
// string containing lowercase letters "a-z" or "." where "." can 
// represent any letter

// You may assume that all given words contain only lowercase letters.

function WordDictionary() {
    this.dictionary = [];
};

WordDictionary.prototype.addWord = function (word) {
    this.dictionary.push(word)
};

WordDictionary.prototype.search = function (word) {
    let re = new RegExp('^'+word+'$');
    for (let i = 0; i < this.dictionary.length; i++) {
        if (re.test(this.dictionary[i])) return true;
    }
    return false;
};
