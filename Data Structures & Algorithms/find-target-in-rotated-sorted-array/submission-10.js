class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            console.log(`Value: ${nums[mid]} index: ${mid}`);
            console.log(`Left: ${left}`);
            console.log(`Right: ${right}`);

            if (nums[mid] === target) return mid;

            // use left part
            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }

            // use right side part
            else {
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return -1;
    }
}

// const nums = [3, 4, 5, 6, 1, 2],
//     target = 1;

const nums = [4, 5, 6, 7, 0, 1, 2],
    target = 0;

sol = new Solution();
sol.search(nums, target);
