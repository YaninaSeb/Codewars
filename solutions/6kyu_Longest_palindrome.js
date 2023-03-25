// Find the length of the longest substring in the given string s 
// that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, 
// the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0


//      Solution 1
// longestPalindrome = function(s) {
//     let max = 0;
//     s.split('').forEach((_, i) => {
//         for (let j = s.length; j > i; j--) {
//             if (j - i > max) {
//                 let word = s.slice(i, j);
//                 if (word === word.split('').reverse().join('')) max = Math.max(max, word.length);
//             } else {
//                 break;
//             }
//         }
//     });
//     return max;
// }

longestPalindrome = function(s) {
    for (let l = s.length; l > 0; l--) {
        for (let i = 0; i <= s.length - l; i++) {
            if (s[i] === s[i+l-1]) {
                let word = s.slice(i, i+l);
                if (word === word.split('').reverse().join('')) return l;
            }
        }
    }
    return 0;
}
