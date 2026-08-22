class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const map = new Map(); // nums element -> frequency

    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) + 1);
        continue;
      }
      map.set(nums[i], 1);
    }

    // b[1] and a[1] because on .entries() it returns the 'key' and 'value' but we only need the value 'frequency'
    const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    // console.log([...sortedMap.keys()].splice(0, k));
    return [...sortedMap.keys()].splice(0, k);
  }
}

const nums = [1, 2, 2, 2, 2, 3, 3, 3];
const k = 2;

sol = new Solution();
sol.topKFrequent(nums, k);

