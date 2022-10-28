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

                //First solution

// function woodCut(woods,n){
//     let sumWoods = woods.reduce((acc, curr) => acc += curr, 0);
//     let maxLenBlock = Math.floor(sumWoods / n);

//     if (maxLenBlock < 1) return 0;

//     let countBlocks = 0;

//     while (countBlocks < n) {
//         countBlocks = woods.reduce((acc, curr) =>  acc += Math.floor(curr / maxLenBlock), 0);
//         maxLenBlock -= 1;
//     }

//     return ++maxLenBlock
// }



                //Second solution

function woodCut(woods,n) {
    let maxSize = Math.max(...woods);

    let binarySearch = (start, end) => {
        const middle = Math.floor((start + (end - start)/2));
        let countBlocs = woods.reduce((acc, curr) => acc += Math.floor(curr / middle), 0);

        if (end - 1 == start) {
            let max = woods.reduce((acc, curr) => acc += Math.floor(curr / end), 0);
            return (n == max) ? end : start
        }
        if (countBlocs < n) return binarySearch(start, middle);
        if (countBlocs >= n) return binarySearch(middle, end);
    }

    return binarySearch(1, maxSize);
}


                //Third solution

function woodCut(woods,n) {
    let start = 1;
    let end = Math.max(...woods);

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);

        if (checkLen(woods, middle, n)) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return end;
}

function checkLen(arr, middle, target) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        count += parseInt(arr[i] / middle)
    }
    return count >= target;
}
