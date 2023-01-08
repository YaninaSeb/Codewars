// Given a string of numbers, you must perform a method in which you 
// will translate this string into text, based on the below image: ...

// For example if you get "22" return "b", if you get "222" you will 
// return "c". If you get "2222" return "ca".

// Further details:
// - 0 is a space in the string.
// - 1 is used to separate letters with the same number.
// - always transform the number to the letter with the maximum value, 
// as long as it does not have a 1 in the middle. So, "777777" -->  
// "sq" and "7717777" --> "qs".
// - you cannot return digits.
// - Given a empty string, return empty string.
// - Return a lowercase string.

// Examples:
// "443355555566604466690277733099966688"  -->  "hello how are you"
// "55282"                 -->  "kata"
// "22266631339277717777"  -->  "codewars"
// "66885551555"           -->  "null"
// "833998"                -->  "text"
// "000"                   -->  "   "


let phoneNums = {
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
    '0': ' '
}

function phoneWords(stringOfNums) {
    let str = '';
    let currCountNum = 1;
    let currNum = stringOfNums[0];

    for (let i = 1; i < stringOfNums.length; i++) {
        if (stringOfNums[i] == currNum) {
            currCountNum++;
        } else {
            let s = changeNumToLetter('', phoneNums[currNum], currCountNum);
            str += s;
            currCountNum = 1;
            currNum = stringOfNums[i];
        }

        if ( i == stringOfNums.length - 1) {
            let s = changeNumToLetter('', phoneNums[currNum], currCountNum);
            str += s;
        }
    }

    return str;
}

function changeNumToLetter(s, letters, count) {
    if (letters == '') return '';

    if (count > letters.length) {
        s += letters[letters.length-1];
        count -= letters.length;
        return changeNumToLetter(s, letters, count)
    } else {
        return s += letters[count-1]
    }
}
