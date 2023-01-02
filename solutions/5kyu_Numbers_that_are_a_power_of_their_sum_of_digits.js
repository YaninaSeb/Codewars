// The number 81 has a special property, a certain power of the sum 
// of its digits is equal to 81 (nine squared). Eighty one (81), is 
// the first number in having this property (not considering numbers 
// of one digit). The next one, is 512. Let's see both cases with 
// the details

// 8 + 1 = 9 and 92 = 81

// 512 = 5 + 1 + 2 = 8 and 83 = 512

// We need to make a function that receives a number as argument n 
// and returns the n-th term of this sequence of numbers.

// Examples (input --> output)
// 1 --> 81
// 2 --> 512

// Happy coding!


function powerSumDigTerm(n) {
    let count = 0;

    for (let i = 11; ; i++) {
        let isSpecial = checkNum(i);

        if (isSpecial) {
            count++;
            if (count == n) return  i;
        }
    }
}

function checkNum(num) {
    let arrNum = num.toString().split('');
    let len = arrNum.length;
    let sum = arrNum.reduce((acc, curr) => acc += +curr, 0);

    if (sum === 1) return false;

    for (let pow = len - 1; ; pow++) {
        let newNum = Math.pow(sum, pow);

        if (newNum == num) return true;
        if (newNum > num) return false
    }
}


console.log(powerSumDigTerm(1))