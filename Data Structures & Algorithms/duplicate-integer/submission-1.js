class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
        console.log(`TRUE ${nums[i]} & ${nums[i + 1]}`);
        return true;
      }
    }

    return false;
  }
}

const nums = [4, 1, 2, 3, 3];

sol = new Solution();
sol.hasDuplicate(nums);

