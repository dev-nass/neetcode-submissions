class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    for (let m of matrix) {
      let start = 0;
      let end = m.length - 1;
      console.log(m);

      while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (m[middle] === target) {
          return true;
        } else if (m[middle] >= target) {
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
