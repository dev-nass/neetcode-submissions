class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let minPrice = Infinity;
    let maxPrice = 0;
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
      let price = prices[i];

      if (price < minPrice) {
        minPrice = price; // best buy so far
      } else {
        maxPrice = Math.max(maxPrice, price - minPrice); // sell today
      }
    }

    console.log(maxPrice);
    return maxPrice;
  }
}

// const prices = [7, 6, 4, 3, 1];
const prices = [3, 4, 1];

sol = new Solution();
sol.maxProfit(prices);

