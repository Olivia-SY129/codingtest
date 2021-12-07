const maxProfit = (prices) => {
  let profit = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;

  prices.forEach((price, i) => {
    minPrice = Math.min(minPrice, price);
    profit = Math.max(profit, price - minPrice);
  });

  return profit;
};

const prices = [7, 1, 5, 3, 6, 4]; // 5

console.log(maxProfit(prices));
