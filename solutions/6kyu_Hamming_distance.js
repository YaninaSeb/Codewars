// The Hamming Distance is a measure of similarity between 
// two strings of equal length. Complete the function so 
// that it returns the number of positions where the input 
// strings do not match.

// Examples:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2

// You can assume that the two input strings are of equal length.

function hamming(a,b) {
    let res = 0;

    a.split('').forEach((elem, i) => {
        if (elem != b[i]) res++;
    });

    return res;
}
