// Let's implement the range function:

// range([start], stop, [step])

// range(1, 11);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// range(1, 4, 0); // /!\ note that the step is 0
// => [1, 1, 1]

// range(0);
// => []

// range(10, 0); // /!\ note that the end is before the start
// => []

// range(10);
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// range(0, 30, 5);
// => [0, 5, 10, 15, 20, 25]

// start, if omitted, defaults to 0; step defaults to 1.

// Returns a list of integers from start to stop, incremented by step, 
//exclusive.
// Note that ranges that stop before they start are considered to be 
//zero-length instead of negative.


function range(start=0, stop, step=1) {
    if (arguments.length == 1) {
        stop = arguments[0];
        start = 0;
    }

    let arr = [];

    for (let i = start; i < stop; ) {
        if (step == 0) {
            arr.push(start);
            i++;
        } else {
            arr.push(i);
            i += step;
        }
    }

    return arr;
}
