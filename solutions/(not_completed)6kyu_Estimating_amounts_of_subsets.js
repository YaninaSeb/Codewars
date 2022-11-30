function estSubsets(arr) {
    let allSubsets = [];

    for (let i = 1; i <= arr.length; i++) {
        
        // for (let j = 0; j <= (arr.length - len); j++) {
        //     let newArr = arr.slice(j, j + len);
        //     allSubsets.push(newArr);
        //     console.log(newArr);
        // }
    }

}

function setSubsets(arr, len) {
    let subArr = [];

    if (subArr.length == len) {
        return subArr;
    } else {
        arr.forEach((elem) => {
            if (!subArr.includes(elem)) {
                subArr.push(elem)
            }
        })

    }
}

console.log(estSubsets([1, 2, 3, 4]))