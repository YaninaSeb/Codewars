// Write a function that when given a number >= 0, 
// returns an Array of ascending length subarrays.

function pyramid(n) {
    let res = [];

    for(let i = 1; i <= n; i++ ) {
        let arr = new Array(i).fill(1);
        res.push(arr)
    }

    return res;
}
