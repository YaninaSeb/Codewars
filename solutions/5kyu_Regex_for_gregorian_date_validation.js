// Your task is to write regular expression that validates gregorian 
// date in format "DD.MM.YYYY"

// Correct date examples:
// "23.12.2008"
// "01.08.1994"

// Incorrect examples:
// "12.23.2008"
// "01-Aug-1994"
// " 01.08.1994"

// Notes:
// - maximum length of validator is 400 characters to avoid hardcoding. 
// (shortest solution to date is 170 characters)
// - validator should process leap days (February, 29) correctly.
// - the date is Gregorian, it's important to determine if year is 
// leap: https://en.wikipedia.org/wiki/Gregorian_calendar


let re_28days = '(0[1-9]|1[0-9]|2[0-8])\.(02)\.([1-9][0-9]{3}|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])';
let re_29days = '(29)\.(02)\.([0-9][0-9](([02468][48]|[13579][26]|[2468]0))|(([02468][48]|[13579][26]|[2468]0)00))';
let re_30days = '(0[1-9]|[12][0-9]|30)\.(0[469]|11)\.([1-9][0-9]{3}|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])';
let re_31days = '(0[1-9]|[12][0-9]|30|31)[\.](0[13578]|10|12)\.([1-9][0-9]{3}|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])';

date_validator = new RegExp(`^(${re_28days}|${re_29days}|${re_30days}|${re_31days})$`);
