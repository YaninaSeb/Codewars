// You will be given an array of numbers. You have to sort the odd 
// numbers in ascending order while leaving the even numbers at their 
// original positions.

function sortArray(array) {
    let oddNums = array.filter((num) => num % 2 != 0);
    let oddSort = oddNums.sort((a, b) => a - b);
    let ind = 0;

    let res = array.map((elem) => {
        return elem % 2 != 0 ? oddSort[ind++] : elem
    });

    return res
}
