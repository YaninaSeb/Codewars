// You are given an array (which will have a length of at least 3, 
// but could be very large) containing integers. The array is either 
// entirely comprised of odd integers or entirely comprised of even 
// integers except for a single integer N. Write a method that takes 
// the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
    let evenNum = [];
    let oddNum = [];

    integers.forEach((num) => {
        num % 2 == 0 ? evenNum.push(num) : oddNum.push(num)
    });

    let res = evenNum.length == 1 ? evenNum[0] : oddNum[0]

    return res;
}
