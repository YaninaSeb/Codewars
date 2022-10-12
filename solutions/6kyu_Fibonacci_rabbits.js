// In his publication Liber Abaci Leonardo Bonacci, aka Fibonacci, posed a problem 
// involving a population of idealized rabbits. These rabbits bred at 
// a fixed rate, matured over the course of one month, had unlimited resources, and were immortal.

// Create a function that determines the number of pairs of mature 
// rabbits after n months, beginning with one immature pair of these 
// idealized rabbits that produce b pairs of offspring at the end of each month.

function fib_rabbits(n, b) {
    let mature = 1;
    let immature = 0;

    for (let i = 2; i <= n; i++) {
        let prevImmature = immature;
        immature = mature * b;
        mature = prevImmature + mature;
        prevImmature = immature;
    }
    return n != 0 ? mature : 0;
}
