class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let l = 0;
    let r = heights.length - 1;
    
    let largestComputedArea = 0;

    while (l < r) {
      // (r - l) finds the width. the distance between two pillars
      const currentArea = Math.min(heights[l], heights[r]) * (r - l);
      console.log(r - l);
      console.log(`${currentArea} =`);
      largestComputedArea = Math.max(largestComputedArea, currentArea);

      if (heights[l] < heights[r]) {
        l += 1;
      } else {
        r -= 1;
      }
    }

    console.log(largestComputedArea);
    return largestComputedArea;
  }
}

const heights = [1, 7, 2, 5, 4, 7, 3, 6];
sol = new Solution();
sol.maxArea(heights);

