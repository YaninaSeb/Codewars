// Given some pieces of wood. It given by an integer array woods(argument 1), 
// each element is the length of wood. Cut them into small pieces to 
// guarantee you could have equal or more than n(argument 2) pieces 
// with the same length(length should be integer). Your task is find 
// what is the longest length you can get from these woods? Return 
// the maximum length of the small pieces.

// Note:
// - All numbers in woods are positive integers;
// - n is an positive integer too;
// - Result should be an integer length of small piece as long as possible;
// Please pay attention to optimizing the code to avoid time out

function woodCut(woods,n){
    let sumWoods = woods.reduce((acc, curr) => acc += curr, 0);
    let maxLenBlock = Math.floor(sumWoods / n);

    if (maxLenBlock < 1) return 0;

    for (; ;maxLenBlock--) {
        let countBlocks = woods.reduce((acc, curr) =>  acc += Math.floor(curr / maxLenBlock), 0);
        if (countBlocks >= n) break;
    }

    return maxLenBlock
}

console.log(woodCut([1, 1, 1], 3));
