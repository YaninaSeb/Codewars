// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or 
// camelCase in Java) for strings. All words must have their first letter capitalized 
// without spaces.

// For instance:
// "hello case".camelCase() => HelloCase

String.prototype.camelCase = function(){
    if (this.trim() == '') return '';

    let res = this.trim().split(' ').map((elem) => elem[0].toUpperCase() + elem.slice(1)).join('')

    return res;
}
