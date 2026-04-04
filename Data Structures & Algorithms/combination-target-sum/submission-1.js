class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        const dfs = (cur, sum, i) => {
            if(sum === target) {
                res.push([...cur]);
                return;
            }

            if(sum > target || i >= nums.length) {
                return;
            }

            cur.push(nums[i]);
            // reuse the same number
            dfs(cur, sum+nums[i], i );
            cur.pop();
            dfs(cur, sum, i+1);
        }

        dfs([], 0, 0);
        return res;
    }
}
