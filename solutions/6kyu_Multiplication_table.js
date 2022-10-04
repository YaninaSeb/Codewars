// Your task, is to create NxN multiplication table, of size provided in parameter.

multiplicationTable = function(size) {
    let arr = [];

    for (let i = 1; i <= size; i++) {
        let row = new Array(size).fill(1).map((_, ind) => {
            return i * (ind + 1);
        });
        arr.push(row)
    }

    return arr
}
