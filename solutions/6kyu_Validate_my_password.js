// I will give you a string. You respond with "VALID" if the string meets 
// the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:
// -More than 3 characters but less than 20.
// -Must contain only alphanumeric characters.
// -Must contain letters and numbers.

function validPass(password){
    let re = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9])[a-z0-9]{4,19}$', 'gi');

    let res = re.test(password)

    return res ? 'VALID' : 'INVALID'
}
