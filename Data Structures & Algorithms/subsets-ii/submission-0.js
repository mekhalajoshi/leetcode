class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = [];
        nums.sort((a, b) => a - b)
        
        const bt = (cur, i) => {
            if (i >= nums.length) {
                res.push([...cur]);
                return;
            }

            cur.push(nums[i]);
            bt(cur,i+1);
            cur.pop();

            while( i + 1 < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }
            bt(cur, i + 1)
        }
        bt([], 0);
        return res;
    }
}
