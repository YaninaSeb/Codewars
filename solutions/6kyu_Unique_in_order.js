// Implement the function unique_in_order which takes as argument 
// a sequence and returns a list of items without any elements with 
// the same value next to each other and preserving the original 
// order of elements.

var uniqueInOrder=function(iterable){
    let res = []
    let previousChar;

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] != previousChar)  {
            res.push(iterable[i]);
            previousChar = iterable[i];    
        }
    }
    return res;
}
