class Solution {
  twoSum(nums, target) {
    const map = new Map(); // value -> index

    for (let i = 0; i < nums.length; i++) {
      const needed = target - nums[i];

      //   console.log(`${needed} = ${target} - ${nums[i]}`);

      if (map.has(needed)) {
        // console.log(...map.values());
        // console.log([map.get(needed), i]);
        return [map.get(needed), i];
      }

      map.set(nums[i], i);
    }

    return [];
  }
}

const target = 7;
const nums = [1, 3, 6, 9, 6];

sol = new Solution();
sol.twoSum(nums, target);

