/**
 * helper function for peak finding
 * @param {*} prices 
 * @returns 
 */
const isThereAPeak = (prices = []) => {
  if (prices.length === 0) return false;
  for (let i = 0; i < prices.length-1; i++) {
    if (prices[i] < prices[i+1]) return true;
  }
  return false;
};

/**
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 */

const maxProfit = (prices = []) => {
  if (!isThereAPeak(prices)) return 0;

  let haveBought = false;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    // first element. we only look at the next element
    if (i === 0) {
      if (prices[i] <= prices[i + 1] && !haveBought) {
        profit -= prices[i];
        haveBought = true;
      }
    } else if (i > 0 && i < prices.length - 1) {
      //if peak, sell
      if (
        prices[i - 1] < prices[i] &&
        prices[i + 1] < prices[i] &&
        haveBought
      ) {
        profit += prices[i];
        haveBought = false;

        // if valley, sell
      } else if (
        prices[i - 1] >= prices[i] &&
        prices[i + 1] >= prices[i] &&
        !haveBought
      ) {
        profit -= prices[i];
        haveBought = true;
      }
    } else {
      if (prices[i] >= prices[i - 1] && haveBought) {
        profit += prices[i];
      }
    }
  }
  return profit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
