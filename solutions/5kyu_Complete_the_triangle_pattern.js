function makeTriangle(m,n){
    let countLine = 0;

    for (let i = 1, count = 0; count <= (n-m + 1); i++) { //20-6=14 
        count += i;
        countLine++;

        if (count > (n-m + 1)) return false
        console.log('i, count', i, count)
    }

}

console.log(makeTriangle(6,20))