// We often use smiley faces in correspondence with other people. They allow us to quickly 
// show our reaction to the person(s) we are talking to.
// But one day you wanted to make your correspondence more joyful. So today you have the 
// opportunity to make it happen.

// Task:
// In this kata, your task will be to replace sad emoticons with funny ones.
// The emoticons, will be represented from:
// -Eyes: marked as :, ; or =
// -Nose (optional): marked as - or ~
// -Mouth: marked as ( or [

// Examples:
// smile("Howdy :(")  // should return "Howdy :)"

function smile(text) {
    let reSmiles = new RegExp(/[:;=][-~]{0,1}[\[\(]/g);
    let reMouth = new RegExp(/[\[|\(]/)

    let res = text.replace(reSmiles, (smile) => smile.replace(reMouth, (mouth) => mouth == '(' ? ')' : ']'))

    return res
}
