// Introduction - JoJo's World
// You may have heard about one of the most popular and influencial Japanese 
// franchises, hailing from the 80s and still running with very good sale figures: 
// JoJo no Kimyō na Bōken AKA JoJo's Bizarre Adventure.

// And if the notion of "bizarre" somehow eludes you, you could think of something 
// like facing a basically immortal ancient superhuman being, worshipped and feared 
// by both Aztecs and Romans who just got upgraded to demigod status and his showing 
// off his new powers against you and your allies, which happen to include the 
// largest American foundation, a nazi supercyborg and his loyal elite troopers.

// Instructions
// But I digress: point is that to date the author creates 8 sagas around 8 different 
// JoJos: the one you could recognize in the video is Joseph Joestar, grand-son of 
// the fist JoJo, Jonathan Joestar.

// And you could see a pattern already here: you are a JoJo if both your name and 
// surname start with "Jo-". One more complication comes with the third JoJo: 
// Jotaro Kujo (or, following Japanese use of putting the family name first: KuJo Jotaro). 
// One last variant comes with the fifth JoJo: as it is of Italian descent (well, sorta of) 
// and the traditional Italian alphabet has only 21 letters (lacking J, K, W, Y and X), 
// the name that you would pronounce Jorno Jovanna has to be spelled "Giorno Giovanna".

// Now, the drill in this kata is rather easy: either create a regex expression or a 
// function to find if a given name is a proper JoJo or not in boolean terms (true/True 
// if it is valid, false/False otherwise).

// To recap, you have a valid JoJo if:
// - both your firstname and your surname start with "Jo-"
// - your firstname starts with "Jo-" and your surname ends with "-Jo"
// - both your firstname and your surname start with "Gio-"

// Notes:
// - don't expect the to have a string formed by only two words joined by a space: 
// strings may be of 1 word, 2 words, 3 words or more
// - lower- and uppercase will not matter here
// - consider the first word as the firstname and the last word as the surname

// Examples
// "Joseph Joestar"    --> valid JoJo name
// "Dio Brando"        --> invalid JoJo name
// "George Joestar II" --> invalid JoJo name (still cool, though)
// "Giorno Giovanna"   --> valid JoJo name
// "Josuke Joestar"    --> valid JoJo name (not his actual surname, but ok)
// "Kars"              --> invalid JoJo name
// "Caesar Zeppeli"    --> invalid JoJo name

function isJojo(name){
    let regex = /^((jo|gio)[\w]* (jo|gio)[\w]*|jo[\w]* [\w]*jo)$/i;
    return regex.test(name);
}
