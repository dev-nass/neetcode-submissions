class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const numbers = [];
    const target = 0;

    nums = nums.sort((a, b) => a - b);
    // console.log(nums);

    for (let a = 0; a < nums.length - 2; a++) {
      if (a > 0 && nums[a] === nums[a - 1]) continue;

      let l = a + 1;
      let r = nums.length - 1;
      while (l < r) {
        const sum = nums[a] + nums[l] + nums[r];

        if (sum > target) {
          r -= 1;
        } else if (sum < target) {
          l += 1;
        } else if (sum === target) {
          numbers.push([nums[a], nums[l], nums[r]]);

          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;

          l++;
          r--;
        }
      }
    }

    console.log(numbers);
    return numbers;
  }
}

const nums = [-1, 0, 1, 2, -1, -4];

sol = new Solution();
sol.threeSum(nums);

