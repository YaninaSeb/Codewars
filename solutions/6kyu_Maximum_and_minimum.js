// Write two functions max and min which returns the maximum and minimum 
// value of the argument passed into them respectively.

// Example
// max(1,2,3,4) //returns 4
// max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
// max(1,2,[3,4]) //returns 4
// max(1,2,[3,[4]]) //returns 4
// max(1,2,[3,['4r']]) //returns NaN
// max([[],[-4]]) // returns -4
// max() or max([]) //returns 0

// And so goes for min

// Further Instructions
// - functions will take any number of arguments
// - Arrays of numbers can be to any depth
// - You can't use Math.max, Math.min, and require
// - If one of the arguments can not be evaluated to a number, return NaN


function max(){
    let arr = getArrArgs(arguments);
    let max = arr.length > 0 ? arr[0] : 0;

    arr.forEach((elem) => {
        if (isNaN(+elem)) {
            max = NaN
        } else if (+elem > max) {
            max = +elem;
        }
    });

    return max;
}

function min(){
    let arr = getArrArgs(arguments);
    let min = arr.length > 0 ? arr[0] : 0;

    arr.forEach((elem) => {
        if (isNaN(+elem)) {
            min = NaN
        } else if (+elem < min) {
            min = +elem;
        }
    });

    return min;
}

function getArrArgs(args) {
    let arrArgs = [];

    for (let i = 0; i < args.length; i++) {
        if (Array.isArray(args[i])) {
            let arr = args[i].flat(Infinity);
            arrArgs.push(...arr);
        } else {
            arrArgs.push(args[i]);
        }
    }

    return arrArgs;
}
