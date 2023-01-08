// Introduction
// You need to write a function that will format a phone number by a template.

// Task
// You're given number and string.
// If there are more digits than needed, they should be ignored

// if there are less digits than needed, should return Invalid phone number

// Examples
// (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
// (79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75"
// (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
// (81237068908090, "+## ### ### ## ##") => "+81 237 068 90 80"
// (8123706890, "+## ### ### ##-##") => "Invalid phone number"
// (911, "###") => "911"
// (112, "+ () -") => "+ () -"


// function formatNumber(number, template) {
//     let arrNum = number.toString().split('');
//     let res = '';

//     for (let i = 0; i < template.length; i++) {
//         if (template[i] == '#') {
//             if (arrNum.length == 0) return "Invalid phone number";

//             res += arrNum.shift();
//         } else {
//             res += template[i]
//         }
//     }

//     return res;
// }


function formatNumber(number, template) {
    let arrNum = number.toString().split('');
    arrNum.forEach((num) => template = template.replace('#', num));

    return template.includes('#') ? 'Invalid phone number' : template;
}
