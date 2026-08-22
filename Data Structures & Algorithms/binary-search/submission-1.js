class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      console.log(`looping... ${middle}`);

      if (nums[middle] === target) {
        console.log(middle);
        return middle;
      } else if (nums[middle] >= target) {
        // disgard the right hand side
        // focus more on the left
        end = middle - 1;
      } else {
        // disgard the left hand side
        // focus more on the right
        start = middle + 1;
      }
    }
    // console.log(answer);

    return -1; // not found
  }
}
