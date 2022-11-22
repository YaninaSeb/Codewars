// The function must return the sequence of titles that match the string passed as 
//an argument.

// TITLES is a preloaded sequence of strings.

//EXAMPLE
// TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney']
// search('ock') --> ['Rocky 1', 'Rocky 2']

// But the function return some weird result and skip some of the matching results.

// Does the function have special movie taste?


function search(searchTerm) {
    let re = new RegExp(searchTerm, 'i');
  
    return TITLES.filter(function(title) {
      return re.test(title);
    });
}