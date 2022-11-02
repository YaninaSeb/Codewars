// Oh no, our Math object was "accidently" reset. Can you re-implement 
// some of those functions? We can assure, that only non-negative numbers 
// are passed as arguments. So you don't have to consider things 
// like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:
// Math.round()
// Math.ceil()
// Math.floor()

Math.round = function(number) {
    let base = number - number % 1;
    return (number - base) >= 0.5 ? ++base : base
};

Math.ceil = function(number) {
    let base = number - number % 1;
    return (number - base) > 0.0 ? ++base : base
};

Math.floor = function(number) {
    let base = number - number % 1;
    return base
};
