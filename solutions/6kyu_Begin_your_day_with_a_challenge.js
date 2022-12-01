// There are no explanations. You have to create the code that gives the following 
// results in Javascript, Scala, D, Go, and Rust:

// oneTwoThree(0) == ['0', '0']
// oneTwoThree(1) == ['1', '1']
// oneTwoThree(3) == ['3', '111']
// oneTwoThree(19) == ['991', '1111111111111111111']

function oneTwoThree(n) {
    if (n == 0) return ['0', '0'];

    let secondElem = '1'.repeat(n);

    let countNine = parseInt(n / 9);
    let otherNum = n % 9 != 0 ? n % 9 : '';

    let firstElem = '9'.repeat(countNine) + otherNum;

    return [firstElem, secondElem];
}
