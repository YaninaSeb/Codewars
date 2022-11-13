// Math geeks and computer nerds love to anthropomorphize numbers and assign emotions and 
// personalities to them. Thus there is defined the concept of a "happy" number. A happy 
// number is defined as an integer in which the following sequence ends with the number 1.

// -Start with the number itself.
// -Calculate the sum of the square of each individual digit.
// -If the sum is equal to 1, then the number is happy. If the sum is not equal to 1, then 
// repeat steps 1 and 2. A number is considered unhappy once the same number occurs
// multiple times in a sequence because this means there is a loop and it will never reach 1.

// For example, the number 7 is a "happy" number:
// 72 = 49 --> 42 + 92 = 97 --> 92 + 72 = 130 --> 12 + 32 + 02 = 10 --> 12 + 02 = 1

// Your task is to write a program which will print a list of all happy numbers between 
// 1 and x (both inclusive)

function happyNumbers(x) {
    let res = [];

    for (let i = 1; i <= x; i++) {
        let happyNum = isHappy(i);
        if (happyNum) res.push(i)
    }

    return res;
}

function isHappy(n) {
    let arrPow = [n];

    while (n !== 1) {
        n = n.toString().split('').reduce((acc, el) => acc +=Math.pow(el, 2), 0);

        if (arrPow.includes(n)) return false
       
        arrPow.push(n);
    }

    return true
}
