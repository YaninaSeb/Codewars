// Input: Integer n
// Output: String

// Example:

// a(4) prints as
//    A   
//   A A  
//  A A A 
// A     A

// a(8) prints as
//        A       
//       A A      
//      A   A     
//     A     A    
//    A A A A A   
//   A         A  
//  A           A 
// A             A

// Note:
// - Each line's length is 2n - 1
// - Each line should be concatenate by line break "\n"
// - If n is less than 4, it should return ""
// - If n is odd, a(n) = a(n - 1), eg a(5) == a(4); a(9) == a(8)


function a(n) {
    if (n < 4) return '';
    if (n % 2 !== 0) n -= 1;

    let lineLen = 2 * n - 1;
    let middleInd = Math.floor(lineLen / 2);
    let res = [];

    for (let i = 0; i < n; i++) {
        let newLine = new Array(lineLen).fill(' ');
        newLine[middleInd - i] = 'A';
        newLine[middleInd + i] = 'A';

        if (i === (n / 2)) {
            for (let k = middleInd - i; k < middleInd + i; k += 2) {
                newLine[k] = 'A';
            }
        }
        res.push(newLine.join(''))
    }

    return res.join('\n')
}
