// It's 9 time!
// I want to count from 1 to n. How many times will I use a '9'?

// 9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil 
// contribute two '9's each...etc

// Note: n will always be a positive integer.

// Examples (input -> output)
// 8  -> 0
// 9  -> 1
// 10 -> 1
// 98 -> 18
// 100 -> 20

function number9(n){
    let str = n.toString();
    let numTens = str.length - 1;
    let res = 0;

     
    for (let i = 0; i < str.length - 1; i++) {
        let currCount = str[i] * Math.pow(10, numTens - 1) * numTens;

        if (str[i] == 9) {
            currCount += +str.slice(i+1) + 1;
        }

        res += currCount;
        numTens--;
    }

    if (str[str.length - 1] == 9) res++;

    return res;
}
