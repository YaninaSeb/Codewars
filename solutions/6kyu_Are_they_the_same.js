// Given two arrays a and b write a function comp(a, b) (or compSame(a, b)) that checks whether the 
// two arrays have the "same" elements, with the same multiplicities (the multiplicity 
// of a member is the number of times it appears). "Same" means, here, that the elements 
// in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

function comp(array1, array2) {
    if(!array1 || !array2) return false

    array1.forEach((elem) => {
        let num = Math.pow(elem, 2);
        let ind = array2.indexOf(num);
        if (ind > -1) array2.splice(ind, 1)
    });

    return array2.length === 0
}
