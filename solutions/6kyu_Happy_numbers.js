// A happy number is a number defined by the following process: starting with any positive 
// integer, replace the number by the sum of the squares of its digits, and repeat the 
// process until the number equals 1 (where it will stay), or it loops endlessly in a 
// cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers, while those that do
// not end in 1 are unhappy numbers (or sad numbers) (Wikipedia).
// Write a function that takes n as parameter and return true if and only if n is an happy 
// number, false otherwise.

// Examples
// For example number 7 is happy because after a number of steps the computed sequence 
// ends up with a 1: 7, 49, 97, 130, 10, 1 

function isHappy(n) {
    let arrPow = [n];

    while (n !== 1) {
        n = n.toString().split('').reduce((acc, el) => acc +=Math.pow(el, 2), 0);

        if (arrPow.includes(n)) return false
       
        arrPow.push(n);
    }

    return true
}
