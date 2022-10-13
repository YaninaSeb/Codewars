// A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. 
// Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia
// Our goal is to determine whether or not a given string is a valid palindrome or not.
// You can see that they are case insensitive and disregards non alphanumeric characters. 

// Notes:
// The empty string "" can be read forward or backward the same, it's a palindrome in our case.


function palindrome(string) {
    let arr = string.toLowerCase().split('')
    let filterArr = arr.filter((elem) => /[a-zA-Z]/ig.test(elem));
    
    return filterArr.join('') == filterArr.reverse().join('')
}
