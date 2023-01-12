// The Explosive Ordinance Disposal Unit of your country has found 
// a small mine field near your town, and is planning to perform a 
// controlled detonation of all of the mines. They have tasked you 
// to write an algorithm that helps them find all safe spots in the 
// area, as they want to build a temporal base in the area where 
// all workers can rest safely.
// All mines they found are of a special kind, as they only release 
// explosive charge in four straight lines, each pointing at a 
// different cardinal point (north, south, east and west). However, 
// the charge stops spreading when it crosses a tree in its path 
// because the charge is not strong enough to burn them.
// In the following diagram, M represents a mine, C represents the 
// explosive charge released after its detonation, and T are the 
// trees in the area:
// . . . . . . .    . . . . . . .
// . . . T . . .    . . . T . . .
// . . . . . . .    . . . C . . .
// . . T M . . . => . . T M C C C
// . . . . . . .    . . . C . . .
// . . . . . . .    . . . C . . .
// . . . T . . .    . . . T . . .

// Task
// Write an algorithm that, given a mine field represented as an array 
// of arrays of size M * N, returns an array of all safe positions 
// where workers can build their temporal base. As in the previous model, 
// 'M' represents mines, 'T' represents trees, and '.' represents empty 
// spaces where explosive charge can spread. The positions in the array 
// should be in "reading order" (from left to right, and from up to down).

// For example:
// [
//   ['.', '.', '.', '.', 'M'],                      . . . . M                           C C C C M
//   ['.', 'M', '.', 'T', '.'],                      . M . T .                           C M C T C
//   ['.', '.', 'T', '.', '.'],   ==[represents]=>   . . T . .   ==[after explosion]=>   . C T . C
//   ['.', '.', 'M', '.', 'T'],                      . . M . T                           C C M C T
//   ['.', '.', '.', '.', '.']                       . . . . .                           . C C . .
// ]
// This should return one of the two following arrays, depending on the 
// language. Check sample test cases for more information. Also, trees 
// don't count as safe positions.

// [[2,0], [2,3], [4,0], [4,3], [4,4]]

// Return an empty array if there are no safe positions.

// Note
// Mines will not stop explosive charge from spreading as trees do, and 
// explosive charge won't erase mines it finds in its path. Make sure 
// you never override any mines in the field.


function safe_mine_field(mine_field) {
    let res = [];

    mine_field.forEach((elemY, indY) => {
        elemY.forEach((elemX, indX) => {
            if (elemX === 'M') mine_field = detonation(mine_field, indY, indX);
        });
    });

    mine_field.forEach((elemY, indY) => {
        elemY.forEach((elemX, indX) => {
            if (elemX === '.') res.push([indY, indX]);
        });
    });

    return res;
}

function detonation(mine_field, y, x) {
    for (let i = y - 1; i >= 0; i-- ) {
        if (['T', 'M'].includes(mine_field[i][x])) break;
        mine_field[i][x] = 'C';
    }

    for (let i = y + 1; i < mine_field.length; i++ ) {
        if (['T', 'M'].includes(mine_field[i][x])) break;
        mine_field[i][x] = 'C';
    }

    for (let i = x - 1; i >= 0; i-- ) {
        if (['T', 'M'].includes(mine_field[y][i])) break;
        mine_field[y][i] = 'C';
    }

    for (let i = x + 1; i < mine_field[y].length; i++ ) {
        if (['T', 'M'].includes(mine_field[y][i])) break;
        mine_field[y][i] = 'C';
    }

    return mine_field;
}
