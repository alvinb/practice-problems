/**
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 */

const maxProfit = (prices = []) => {
  if (prices.length === 0) return 0;

  let lastPriceBought = 0;
  let haveBought = false;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    const current = prices[i];
    const next = prices[i + 1];

    if (!haveBought) {
      
      if (current < next) {
        profit -= current;
        haveBought = true;
        console.log(`bought at ${current}`);
      }
    } else {
      if (typeof next === 'undefined') {
        profit += current;
        haveBought = false;
        console.log(`sold at ${current}`);
      } 

      else if (typeof next !== 'undefined' && current > next) {
        profit += current;
        haveBought = false;
        console.log(`sold at ${current}`);

      }
      
    }

  }
  return profit;
};

console.log(maxProfit([8, 6, 4, 3, 3, 2, 3, 5, 8, 3, 8, 2, 6]));