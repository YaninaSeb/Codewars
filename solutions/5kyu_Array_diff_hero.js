function arrayDiffVeryFast(a, b) {
    // let arrA = [...new Set(a)]
    // let res = arrA.filter((elem) => !b.includes(elem))
    // return res

    let res = [];

    for (let i = 0; i <=25; i++) {
        let indA = a.indexOf(i);
        let indB = b.indexOf(i);
      if (indA>-1 && indB<0) res.push(i);
    }
    
    return res
}

console.log(arrayDiffVeryFast([1,22,52,62,3,5,5,1,2,4,5,1], [2,1,5]))