class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        const dfs = (cur, i) => {
            if(i === nums.length) {
                res.push([...cur]);
                return;
            }

            dfs(cur, i+1);
            cur.push(nums[i]);
            dfs(cur, i+1);
            cur.pop();
        }

        dfs([],0);
        
        return res;
    }
}
