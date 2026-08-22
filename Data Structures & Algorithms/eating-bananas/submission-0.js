class Solution {
  minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let answer = right;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let hours = 0;

      for (let pile of piles) {
        hours += Math.ceil(pile / mid);
        console.log(`${hours} = ${pile} / ${mid}`);
      }

      if (hours <= h) {
        // mid works, try smaller
        console.log("move right")
        answer = mid;
        right = mid - 1;
      } else {
        // mid too slow
        console.log("move left")
        console.log(`mid: ${mid}`)
        left = mid + 1;
      }
    }

    return answer;
  }
}
// const piles = [1,4,3,2], h = 9;
const piles=[25,10,23,4]
const h=4
sol = new Solution;
sol.minEatingSpeed(piles, h);