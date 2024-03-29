// - A friend of mine takes the sequence of all numbers from 
// 1 to n (where n > 0).
// - Within that sequence, he chooses two numbers, a and b.
// - He says that the product of a and b should be equal to 
// the sum of all numbers in the sequence, excluding a and b.
// - Given a number n, could you tell me the numbers he excluded 
// from the sequence?
// The function takes the parameter: n (n is always strictly 
// greater than 0) and returns an array or a string (depending 
// on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

// with all (a, b) which are the possible removed numbers in the 
// sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be 
// sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function 
// returns an empty array (or an empty string) if no possible 
// numbers are found which will prove that my friend has not told 
// the truth! (Go: in this case return nil).

// Examples:
// removNb(26) should return [(15, 21), (21, 15)]
// or
// removNb(26) should return { {15, 21}, {21, 15} }
// or
// removeNb(26) should return [[15, 21], [21, 15]]
// or
// removNb(26) should return [ {15, 21}, {21, 15} ]
// or
// removNb(26) should return "15 21, 21 15"
// or

// Note
// See examples of returns for each language in "RUN SAMPLE TESTS"


// function removeNb (n) {
//     let arrNum = new Array(n).fill(1).map((elem, i) => elem * (i+1));
//     let sumAllNum = arrNum.reduce((acc, curr) => acc + curr, 0);
//     let middleNum = parseInt(Math.sqrt(sumAllNum));
//     let res = [];

//     for (let num1 = 1; num1 < middleNum; num1++) {
//         for (let num2 = middleNum; num2 <= n; num2++) {
//             if ((sumAllNum - num1 - num2) === (num1 * num2)) {
//                 res.push([num1, num2]);
//                 res.push([num2, num1]);
//             }
//         }
//     }
//     return res;
// }

function removeNb (n) {
    let sum = ((1 + n) * n) / 2;
    let res = [];

    for (let x = 1; x <= n; x++) {
        let y = (sum - x) / (x + 1);
        if (parseInt(y) === y && y <= n) res.push([x, y]);
    }

    return res;
}
