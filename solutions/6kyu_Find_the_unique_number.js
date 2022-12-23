// There is an array with some numbers. All numbers are equal except for one. 
// Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


function findUniq(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] != arr[i+1] && arr[i] != arr[i+2]) return arr[i];
    }

    if (arr[arr.length - 2] != arr[arr.length - 3]) {
        return arr[arr.length - 2]
    } else {
        return arr[arr.length - 1]
    }
}

console.log(findUniq([ 0, 0, 1]));