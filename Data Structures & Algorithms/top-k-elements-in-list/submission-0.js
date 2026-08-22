class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let groupedNum = [];
    let numbers = [];

    // access the nums arr
    for (let i = 0; i < nums.length; i++) {
      let hasGroup = false;

      if (i === 0) {
        groupedNum.push([nums[i]]);
        continue;
      }

      // groups the elements
      for (let j = 0; j < groupedNum.length; j++) {
        const elem1 = nums[i];
        const elem2 = groupedNum[j][0];

        if (elem1 === elem2) {
          hasGroup = true;
          groupedNum[j].push(elem1);
        }
      }

      if (!hasGroup) {
        groupedNum.push([nums[i]]);
      }
    }

    // force decending order
    groupedNum.sort((a, b) => b.length - a.length);
    // console.log(groupedNum);

    for (let i = 0; i < k; i++) {
      numbers.push(groupedNum[i][0]);
    }

    // if (groupedNum.length > 1) {
    //   for (let i = 0; i < groupedNum.length; i++) {
    //     for (let j = 1; j < groupedNum.length; j++) {
    //       const elem1 = groupedNum[i].length;
    //       const elem2 = groupedNum[j].length;

    //       if (numbers.length < k) {
    //         if (elem1 >= elem2) {
    //           numbers.push([groupedNum[i][0]]);
    //         } else if (elem1 <= elem2) {
    //           numbers.push([groupedNum[j][0]]);
    //         }
    //       }
    //     }
    //   }
    // } else {
    //   numbers.push(groupedNum.flat());
    // }

    console.log(numbers.flat());

    return numbers.flat();
  }
}

const nums = [1, 2, 2, 3, 3, 3];
// const nums = [7];
const k = 2;

sol = new Solution();
sol.topKFrequent(nums, k);

