// For a given string s find the character c (or C) with longest consecutive repetition 
// and return:
// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters 
// with the same l return the first in order of appearance.

// For empty string return:
// ["", 0]

// In JavaScript: If you use Array.sort in your solution, you might experience issues 
// with the random tests as Array.sort is not stable in the Node.js version used by 
// CodeWars. This is not a kata issue.

function longestRepetition(s) {
    let symbol = '';
    let count = 0;

    let currentSymbol = s[0];
    let currentCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == currentSymbol) {
            currentCount++;
        } else {
            if (currentCount > count) {
                count = currentCount;
                symbol = currentSymbol
            }
            currentSymbol = s[i];
            currentCount = 1;
        }
    }

    if (currentCount > count) {
        count = currentCount;
        symbol = currentSymbol
    }

    return [symbol, count];
}
