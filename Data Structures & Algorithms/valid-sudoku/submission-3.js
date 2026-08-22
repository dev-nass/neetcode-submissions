class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const n = board.length;

        const rowMap = new Map();
        for (let r = 0; r < n; r++) {
            for (let num of board[r]) {
                if (num === ".") continue;

                if (rowMap.has(num)) {
                    return false;
                }

                rowMap.set(num);
            }

            rowMap.clear();
        }

        const colMap = new Map();
        for (let c = 0; c < n; c++) {
            // outer = COLUMN
            for (let r = 0; r < n; r++) {
                // inner = ROW
                const val = board[r][c];
                if (val === ".") continue;

                if (colMap.has(val)) return false;
                colMap.set(val);
            }
            colMap.clear(); // clear AFTER finishing ONE column
        }

        const blockMap = new Map();
        // outter loops
        for (let jumpRow = 0; jumpRow < 9; jumpRow += 3) {
            for (let jumpCol = 0; jumpCol < 9; jumpCol += 3) {
                // inner loops
                for (let r1 = 0; r1 < 3; r1++) {
                    for (let c1 = 0; c1 < 3; c1++) {
                        const val = board[jumpRow + r1][jumpCol + c1];
                        if (val === ".") continue;
                        if (blockMap.has(val)) return false;

                        blockMap.set(val);
                    }
                }

                blockMap.clear();
            }
        }

        return true;
    }
}

const board = [
    ["1", "2", ".", ".", "3", ".", ".", "3", "."],
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
