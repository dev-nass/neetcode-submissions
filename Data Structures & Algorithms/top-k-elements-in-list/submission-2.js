class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (let num of nums) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
                continue;
            }

            map.set(num, 1);
        }

        const answer = new Map(
            [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, k),
        );

        console.log([...answer.keys()].slice(0, k));
        return [...answer.keys()].slice(0, k);
    }
}

const nums = [1, 2, 2, 3, 3, 3];
const k = 2;

sol = new Solution();
sol.topKFrequent(nums, k);
