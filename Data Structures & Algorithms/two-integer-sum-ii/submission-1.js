class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (i === j) continue;

        if (numbers[i] + numbers[j] === target) {
          console.log(numbers[i] + numbers[j]);
                 return [i + 1, j + 1];


        }
      }
    }

    return false;
  }
}

const numbers = [1, 2, 3, 4];
const target = 3;

sol = new Solution();
sol.twoSum(numbers, target);

