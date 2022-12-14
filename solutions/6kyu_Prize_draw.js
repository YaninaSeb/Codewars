// To participate in a prize draw each one gives his/her firstname.

// Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

// The length of the firstname is added to the sum of these ranks hence a number som.

// An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

// Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

// Task:
// parameters: st a string of firstnames, we an array of weights, n a rank
// return: the firstname of the participant whose rank is n (ranks are numbered from 1)

// Notes:
// The weight array is at least as long as the number of names, it may be longer.
// If st is empty return "No participants".
// If n is greater than the number of participants then return "Not enough participants".

function rank(st, we, n) {
    if (st.length == 0) return 'No participants'

    let arrNames = st.split(',');
    if (n > arrNames.length) return 'Not enough participants';

    let arrNamesWithSom = arrNames.map((name, index) => {
        let arrLetterName = name.toUpperCase().split('');
        let som = name.length + arrLetterName.reduce((acc,letter) => {
            return acc += letter.charCodeAt() - 64;
        }, 0);
        let weight = we[index];
        let winNum = som * weight;
        return [name, winNum];
    });

    arrNamesWithSom.sort((a, b) => {
        if (a[1] != b[1]) {
            return b[1] - a[1];
        } else {
             return b[0] < a[0] ? 1 : -1;
        }
    });

    let searchName = arrNamesWithSom[n-1][0];

    return searchName;
}
