class Solution {
  /*
   * For each row:
      If target < first element → skip row
      If target > last element → skip row
      Otherwise → binary search within that row
   */
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    for (let row of matrix) {
      // row-level pruning
      // (if this continue meaning we are in the right row)
      // added by ChatGPT
      if (target < row[0] || target > row[row.length - 1]) {
        continue;
      }

      let start = 0;
      let end = row.length - 1;
      console.log(row);

      while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (row[middle] === target) {
          return true;
        } else if (row[middle] >= target) {
          end = middle - 1;
        } else {
          start = middle + 1;
        }
      }
    }
    return false;
  }
}

const matrix = [
  [1, 2, 4, 8],
  [10, 11, 12, 13],
  [14, 20, 30, 40],
];
const target = 10;

sol = new Solution();
sol.searchMatrix(matrix, target);
