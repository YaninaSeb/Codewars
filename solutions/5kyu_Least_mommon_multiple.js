// Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer. 
// In the case that there are no arguments (or the provided array in compiled languages is empty), return 1. 
// If any argument is 0, return 0.

var lcm = function () {
    let arrNums = [...arguments];

    if (arrNums.length == 0 || arrNums.includes(0)) return 0;
  
    let minNum = Math.max(...arrNums);
  
    for (let i = 1; true; i++) {
      let searchNum = minNum * i;
      if (arrNums.every((item) => searchNum % item == 0)) return searchNum;
    }
};
