// Here you will create the classic Pascal's triangle.
// Your function will be passed the depth of the triangle and your code has to return 
// the corresponding Pascal's triangle up to that depth.

// The triangle should be returned as a nested array. For example:

// pascal(5) -> [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]
// To build the triangle, start with a single 1 at the top, for each number 
// in the next row you just take the two numbers above it and add them together, 
// except for the edges, which are all 1. e.g.:
//       1
//     1   1
//   1   2   1
// 1   3   3   1


function pascal(depth) {
    let res = [];

    for(let i = 0; i < depth; i++) {
        let arr = new Array(i+1).fill(1);
        res.push(arr);

        if (arr.length > 2) {
            for (let j = 1; j < i; j++) {
                res[i][j] = res[i-1][j-1] + res[i-1][j];
            }
        }
    }

    return res;
}
