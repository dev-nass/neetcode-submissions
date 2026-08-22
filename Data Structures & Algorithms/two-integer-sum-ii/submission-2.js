class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
      const answer = numbers[l] + numbers[r];
      //   console.log(`${answer} ${numbers[l]} + ${numbers[rr]}`);
        
      if (answer > target) {
        r -= 1;
      } else if (answer < target) {
        l += 1;
      } else {
        console.log([l + 1, r + 1]);
        return [l + 1, r + 1];
      }
    }

    return [];
  }
}

const numbers = [1, 2, 3, 4];
const target = 3;

sol = new Solution();
sol.twoSum(numbers, target);

