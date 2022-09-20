// Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer. 
// In the case that there are no arguments (or the provided array in compiled languages is empty), return 1. 
// If any argument is 0, return 0.

var lcm = function () {
    let arrNums = [...arguments];

    if (arrNums.length == 0) return 0;
    if (arrNums.length == 1) return arrNums[0];

    let maxNum = arrNums.reduce((acc, num) => acc *= num, 1);

    for (let i = 1; i <= maxNum; i++) {
        let res = arrNums.every((item) => i % item == 0);
        if (res) {
            return i;
        }
    }
};
