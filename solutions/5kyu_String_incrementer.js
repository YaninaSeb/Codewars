// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100


function incrementString (strng) {
    let num = strng.match(/[0-9]+$/g);
    if (!num) return `${strng}1`;

    let newNum = (+num[0] + 1).toString().padStart(num[0].length, "0");

    let res = strng.replace( new RegExp(`${num[0]}$`), newNum)

    return res
}
