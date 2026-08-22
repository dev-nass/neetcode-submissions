class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const numbers = [];

    // holds the current element we want to ignore
    for (let i = 0; i < nums.length; i++) {
      let ans = 1;
      // holds the elements we want to multiple it too
      for (let j = 0; j < nums.length; j++) {
        // skip; don't multiply to itself
        if (i === j) {
          console.log(`skip ${nums[i]} * ${nums[j]}`);
          continue;
        }

        console.log(`multi: ${nums[i]} * ${nums[j]}`);

        ans = ans * nums[j];

        console.log(`ans: ${ans}`);
      }

      numbers.push(ans);
    }

    return numbers;
  }
}

const nums = [1, 2, 4, 6];

sol = new Solution();
sol.productExceptSelf(nums);

