// Write function which validates an input string. If the string is a 
// perfect square return true,false otherwise.

// What is perfect square?
// * We assume that character '.' (dot) is a perfect square (1x1) * Perfect 
// squares can only contain '.' (dot) and optionally '\n' (line feed) characters.
// * Perfect squares must have same width and height -> cpt.Obvious
// * Squares of random sizes will be tested!

// Function input:

// perfectSquare = "...\n...\n...";    
// `...
//  ...
//  ...`
                               
// notPerfect = "..,\n..\n...";
// `..,
//  ..
//  ...`


function perfectSquare(string) {
    let arr = string.split('\n');
    return arr.every((elem) => elem === '.'.repeat(arr.length));
}
