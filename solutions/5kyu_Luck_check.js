// In some countries of former Soviet Union there was a belief about lucky tickets. 
// A transport ticket of any sort was believed to posess luck if sum of digits 
// on the left half of its number was equal to the sum of digits on the right half. 
// Here are examples of such numbers:

// Such tickets were either eaten after being used or collected for bragging rights.

// Your task is to write a funtion luck_check(str), which returns true/True if argument 
// is string decimal representation of a lucky ticket number, 
// or false/False for all other numbers. It should throw errors for empty strings or strings 
// which don't represent a decimal number.

function luckCheck(ticket){
    if (ticket.length == 0 || /[^0-9]/.test(ticket)) {
        throw new Error();
    }

    let middle = ticket.length/2; 
    let strLeft = ticket.slice(0, middle);
    let strRight = ticket.length % 2 == 0 ? ticket.slice(middle) : ticket.slice(middle + 1);

    let sumLeft = strLeft.split('').reduce((acc, curr) => acc += +curr, 0)
    let sumRight = strRight.split('').reduce((acc, curr) => acc += +curr, 0)

    return sumLeft == sumRight;
}
