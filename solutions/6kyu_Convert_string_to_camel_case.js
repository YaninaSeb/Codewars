// Complete the method/function so that it converts dash/underscore 
// delimited words into camel casing. The first word within the 
// output should be capitalized only if the original word was 
// capitalized (known as Upper Camel Case, also often referred 
// to as Pascal case).

function toCamelCase(str){
    let res = '';
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '_' || arr[i] == '-') {
            res += arr[i + 1].toUpperCase();
            i++;
        } else {
            res += arr[i];
        }
    }
    return res
}
