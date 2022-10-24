// Complete the function that
//  - accepts two integer arrays of equal length
//  - compares the value each member in one array to the corresponding member in the other
//  - squares the absolute value difference between those two values
//  - and returns the average of those squared absolute value difference between each member pair.

let solution = function(firstArray, secondArray) {
    let len = firstArray.length;
    let sum = firstArray.reduce((acc, curr, ind) => {
        let num = curr - secondArray[ind];
        let powNum = Math.pow(num, 2);
        return acc += powNum;
    }, 0);

    return sum / len;
}
