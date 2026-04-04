class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = [];
        let cur = [];
        
        const backtrack = ( index, cur, target) => {
            if (target === 0) {
                ans.push([...cur]);
                return;
            } else if (target < 0 || index >= nums.length) {
                return;
            } 
            
            cur.push(nums[index]);
            backtrack(index,  cur, target - nums[index]);

            cur.pop();
            backtrack(index+1, cur, target);
            
        }
        backtrack(0, cur, target);
        return ans;
    }
}
