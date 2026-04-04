class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];

        const dfs = (cur) => {
            if(cur.length === nums.length) {
                res.push([...cur]);
                return;
            }

            for(let i=0; i<nums.length; i++) {
                if(!cur.includes(nums[i])) {
                    cur.push(nums[i]);
                    dfs(cur);
                    cur.pop();
                }
            }
        }
        dfs([]);
        return res;        
    }
}
