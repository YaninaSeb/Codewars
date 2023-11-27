// DESCRIPTION:
// Complete the method which returns the number which is most frequent in the
// given input array. If there is a tie for most frequent number, return the largest 
// number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    let nums = {};

    arr.forEach((elem) => {
        if(elem in nums) {
            nums[elem] = nums[elem] + 1;
        } else {
            nums[elem] = 1;
        }
    });

    let maxCount = Math.max(...Object.values(nums));
    let maxNums = [];

    for (let key in nums) {
       if (nums[key] === maxCount) {
           maxNums.push(+key);
       }
    }

    return Math.max(...maxNums);
}