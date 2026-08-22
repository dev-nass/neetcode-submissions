/**
 * Refactored version a combination of my understanding and ChatGPT
 */

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if(!nums || nums.length === 0) return 0
    let longest_streak = 1;
    let current_streak = 1;

    let set = [...new Set(nums.map((num) => num))];
    set = set.sort((a, b) => a - b);

    console.log(set);

    for (let i = 1; i < set.length; i++) {
      let current_Val = set[i];
      let previous_Val = set[i - 1];

      // different solution but still check if they have one difference (-)
      if (current_Val === previous_Val + 1) {
        current_streak++;
        longest_streak = Math.max(longest_streak, current_streak);
      } else {
        current_streak = 1;
      }
    }

    console.log(longest_streak);
    return longest_streak;
  }
}

const nums = [2, 11, 4, 10, 3, 4, 5];
// const nums = [2, 20, 4, 10, 3, 4, 5];
// const nums = [0, 3, 2, 5, 4, 6, 1, 1];
sol = new Solution();
sol.longestConsecutive(nums);