class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let n = height.length;
    if (n === 0) {
      return 0;
    }

    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);

    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
      //   console.log(leftMax[i - 1]);
      //   console.log(height[i]);
      leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let answer = 0;
    for (let i = 0; i < n; i++) {
      answer += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    // console.log(answer);
    return answer;
  }
}

const height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];

sol = new Solution();
sol.trap(height);

