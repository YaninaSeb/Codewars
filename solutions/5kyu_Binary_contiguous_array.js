// DESCRIPTION:
// An array consisting of 0s and 1s, also called a binary array, is given as an input.

// Task
// Find the length of the longest contiguous subarray which consists of equal number 
// of 0s and 1s.

// Example
// s = [1,1,0,1,1,0,1,1]
//          |_____|
//             |
//          [0,1,1,0]

//          length = 4

// Note
// 0 <= length(array) < 120 000

function binarray(a) {
    let startLen = a.length % 2 === 0 ? a.length : a.length - 1;

    for (let l = startLen; l >= 0; l -= 2) {
        for(let i = 0; i <= (a.length - l); i++) {
            let subArr = a.slice(i, i+l);

            if(subArr.join('').replace(/[0]/g, '').length === subArr.length / 2) {
                return subArr.length;
            }
        }
    }

    return 0;
}
