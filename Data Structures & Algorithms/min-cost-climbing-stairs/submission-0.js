class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let dp1 = 0;
        let dp2 = 0;
        const n = cost.length;

        for (let i = n-1; i >=0; i--){
            let temp = Math.min(cost[i] + dp1, cost[i] + dp2);
            dp2 = dp1;
            dp1 = temp;
        }
    return Math.min(dp1, dp2);
    }
}
