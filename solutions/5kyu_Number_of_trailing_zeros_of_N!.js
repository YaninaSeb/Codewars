// Write a program that will calculate the number of trailing zeros 
// in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Hint: You're not meant to calculate the factorial. 
// Find another way to find the number of zeros.

function zeros (n) {
    let sumZeros = 0;

    for (let i = 5; i <= n; i *= 5) {
        sumZeros += Math.floor(n / i);
    }

    return sumZeros;
}
