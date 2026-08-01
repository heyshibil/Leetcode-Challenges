/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = Infinity;

    for (const price of prices) {
        if (price < minPrice) minPrice = price;
        let profit = price - minPrice;
        if (profit > maxProfit) maxProfit = profit;
    }

    return maxProfit;
};