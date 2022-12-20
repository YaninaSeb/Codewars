// Given two numbers x and n, calculate the nth root of x, 
// e.g. r such that r^n = x. However, you're working with some 
// kind of legacy API that doesn't contain a helpful function
// for this task (see end of the description).

// Examples
// root(4, 2);   // 2
// root(8, 3);   // 2
// root(256, 4); // 4
// root(9, 2);   // 3

// The power function of your language (e.g. Math.pow in JavaScript, ** in Haskell) 
// has been disabled. Good luck.


let root = function(x, nth){
    let maxRoot = parseInt(x / nth);

    for (let i = 1; i <= maxRoot; i++) {
        let arr = new Array(nth).fill(i);
        let num = arr.reduce((acc, curr) => acc *= curr, 1);

        if (num == x) return i;
    }
}

