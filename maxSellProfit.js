const maxSellProfit = (stockPrices) => {
  let buyPrice = stockPrices[0];
  let sellPrice = stockPrices[1];
  let profit = 0;
  let maxProfitSoFar = stockPrices[1] - stockPrices[0];

  for ( var index = 1; index < stockPrices.length; index++) {
    profit = stockPrices[index] - buyPrice;
    if ( profit > maxProfitSoFar ) {
      maxProfitSoFar = profit;
      sellPrice = stockPrices[index];
    }
    if ( stockPrices[index] < buyPrice ) {
      buyPrice = stockPrices[index];
    }
  }  
  return { buyPrice: sellPrice - maxProfitSoFar, sellPrice};
};

console.log(maxSellProfit([8, 5, 12, 9, 19, 1]));
console.log(maxSellProfit([21, 12, 11, 9, 6, 3]));
