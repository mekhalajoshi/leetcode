class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
         let min = prices[0];
    let res = 0;
    let curProfit = 0;

    for(let i = 1; i< prices.length; i++) {
        if(min < prices[i]) {
            //sell
            curProfit = prices[i] - min;
        res = Math.max(res, curProfit)
        }else{

        min = Math.min(min, prices[i]);
        }

    }
    return res;
    }
}
