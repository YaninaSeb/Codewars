// DESCRIPTION:
// Given two words, how many letters do you have to remove from them to make them anagrams?

// Example
// - First word : codewars (4 letters removed)
// - Second word : hackerrank (6 letters removed)
// - Result : 10

// Hints
// - A word is an anagram of another word if they have the same letters (usually in a different order).
// - Do not worry about case. All inputs will be lowercase.

function anagramDifference(w1,w2) {
    let allLeters = w2;
    let commonLeters = '';

    for (let i = 0; i < w1.length; i++) {
        if (allLeters.includes(w1[i])) {
            commonLeters += w1[i];
            allLeters = allLeters.replace(w1[i], '');
        }
    }

   return w1.length + w2.length - (commonLeters.length * 2);
}
