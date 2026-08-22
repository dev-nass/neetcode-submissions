class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        for(let i = 0; i < matrix.length; i++) {
            for(let m of matrix[i]) {
                if (m!==target) {
                    continue;
                }

                return true;
            }
        }

        return false;
    }
}
