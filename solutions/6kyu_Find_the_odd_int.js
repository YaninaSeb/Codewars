// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
  let obj = {}

  arr.forEach((elem) => {
    if (obj[`${elem}`] >= 1) {
      obj[`${elem}`] = obj[`${elem}`] + 1;
    } else {
      obj[`${elem}`] = 1;
    }
  });

  for (let item in obj) {
    if (obj[`${item}`] % 2 != 0) return Number(item)
  }
}
