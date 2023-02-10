// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to 
// fill all cells of the grid with digits from 1 to 9, so that each 
// column, each row, and each of the nine 3x3 sub-grids (also known 
// as blocks) contain all of the digits from 1 to 9.
// More info at: http://en.wikipedia.org/wiki/Sudoku

// Sudoku Solution Validator
// Write a function that accepts a Sudoku board, and returns true if 
// it is a valid Sudoku solution, or false otherwise. The cells of the 
// input Sudoku board may also contain 0's, which will represent empty 
// cells. Boards containing one or more zeroes are considered to be 
// invalid solutions.

// Examples
// Valid board:

//   5 3 4|6 7 8|9 1 2
//   6 7 2|1 9 5|3 4 8
//   1 9 8|3 4 2|5 6 7
//   -----+-----+-----
//   8 5 9|7 6 1|4 2 3
//   4 2 6|8 5 3|7 9 1
//   7 1 3|9 2 4|8 5 6
//   -----+-----+-----
//   9 6 1|5 3 7|2 8 4
//   2 8 7|4 1 9|6 3 5
//   3 4 5|2 8 6|1 7 9

// Invalid board:
                
//               This column has two 3's
//                         v
// This cell has a 0 > 0 3 4|6 7 8|9 1 2
//                     6 7 2|1 9 5|3 4 8
//                     1 9 8|3 4 2|5 6 7
//                     -----+-----+-----
//                     8 5 9|7 6 1|4 2 3
//                     4 2 6|8 5 3|7 9 1
//                     7 1 3|9 2 4|8 5 6
//                     -----+-----+-----
//     This box has   /9 6 1|5 3 7|2 8 4
//          two 3's >| 2 8 3|4 1 9|6 3 5 < This row has two 3's
//                    \3 4 5|2 8 6|1 7 9

// Details
// - All inputs are guaranteed to be 2D boards of size 9x9 with 
// possible values in range 0-9.
// - Rows, columns and blocks (3x3 small squares) must contain 
// each number from range 1-9 exactly once.
// - User solution must not modify input boards.


let currBoards = [];

function validateSudoku(board) {
    currBoards = board;

    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            let isRight = checkElem(y, x);
            if (!isRight) return false;

            if (y % 3 === 0 && x % 3 === 0) {
                let isRightInBox = checkElemInBox(y, x)
                if (!isRightInBox) return false;
            }
        }
    }

    return true;
}

function checkElem(y, x) {
    let elem = currBoards[y][x];

    if (elem === 0) return false;
    
    if (currBoards[y].indexOf(elem) !== currBoards[y].lastIndexOf(elem)) return false;

    for (let posY = y + 1; posY < currBoards.length; posY++) {
        if (currBoards[posY][x] === elem) return false;
    }

    return true;
}

function checkElemInBox(y, x) {
    let allNum = [];
    for (let posY = y; posY < y + 3; posY++) {
        for (let posX = x; posX < x + 3; posX++) {
            let elem = currBoards[posY][posX];
            allNum.push(elem);
        }
    }

    return new Set(allNum).size === 9;
}
