// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic 
// characters and numeric digits that occur more than once in the input string. The 
// input string can be assumed to contain only alphabets (both uppercase and lowercase) 
// and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    let obj = {};
    let count = 0;

    for(let i = 0; i < text.length; i++) {
        let key = text[i];
        let keyLower = text[i].toLowerCase();
        let keyUpper = text[i].toUpperCase();
       
        if(keyLower in obj) {
            obj[keyLower] = obj[keyLower] + 1;
        } else if(keyUpper in obj) {
            obj[keyUpper] = obj[keyUpper] + 1;
        } else {
            obj[key] = 0;
        }
    }

    for (let key in obj) {
        if (obj[key] > 0) {
            count++;
        }
    }

    return count;
}
