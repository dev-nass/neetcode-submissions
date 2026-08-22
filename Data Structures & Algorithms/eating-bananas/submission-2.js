class Solution {
  minEatingSpeed(piles, h) {
    let currRate = 1;
    while(true) {
        let totalTime = 0;
        
        for(let pile of piles) {
            totalTime += Math.ceil((pile / currRate));
        }
        
        if(totalTime <= h) {
            return currRate;
        }
        
        currRate++;
    }
  }
}
