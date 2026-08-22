class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    // console.log(board[0][1]);

    // check per row
    // move validation per row
    for (let i = 0; i < board.length; i++) {
      // holds the current value
      for (let j = 0; j < board.length; j++) {
        // holds where we compare it too
        for (let k = 0; k < board.length; k++) {
          if (k === j) continue;

          //   console.log(`j: ${board[i][j]} k: ${board[i][k]}`);
          //   console.log(`i ${i} j: ${j} k: ${k}`);
          if (
            board[i][j] === board[i][k] &&
            (board[i][j] !== "." || board[i][k] !== ".")
          ) {
            console.log(`MAY KAGAYA ROW ${board[i][j]} ${board[i][k]}`);
            return false;
          }
        }
      }
    }

    // check per col
    // move the validation per col
    for (let i = 0; i < board.length; i++) {
      // holds the current value
      for (let j = 0; j < board.length; j++) {
        // holds where we compare it too
        for (let k = 0; k < board.length; k++) {
          if (k === j) continue;

          if (
            board[j][i] === board[k][i] &&
            (board[k][i] !== "." || board[k][i] !== ".")
          ) {
            console.log(`MAY KAGAYA COl ${board[j][i]} ${board[k][i]}`);
            return false;
          }
        }
      }
    }

    for (let jumpRow = 0; jumpRow < 9; jumpRow += 3) {
      for (let jumpCol = 0; jumpCol < 9; jumpCol += 3) {
        // inner loops
        for (let r1 = 0; r1 < 3; r1++) {
          for (let c1 = 0; c1 < 3; c1++) {
            // access each element
            const value = board[jumpRow + r1][jumpCol + c1];

            for (let r2 = 0; r2 < 3; r2++) {
              for (let c2 = 0; c2 < 3; c2++) {
                if (r1 === r2 && c1 === c2) continue;
                const compareTo = board[jumpRow + r2][jumpCol + c2];

                if (
                  value === compareTo &&
                  (value !== "." || compareTo !== ".")
                ) {
                  console.log("may kagaya 3x3");
                  return false;
                }
              }
            }
          }
        }
      }
    }

    return true;
  }
}

// const board = [
//   ["1", "2", ".", ".", "3", ".", ".", ".", "."], // 0
//   ["4", ".", ".", "5", ".", ".", ".", ".", "."], // 1
//   [".", "9", "8", ".", ".", ".", ".", ".", "3"], // 2
//   ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
//   [".", ".", ".", "8", ".", "3", ".", ".", "5"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", ".", ".", ".", ".", ".", "2", ".", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "8"],
//   ["1", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

const board = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "1", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

sol = new Solution();
sol.isValidSudoku(board);

