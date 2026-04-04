class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set  = new Set(nums);

        
        let curMax = 0;
        let res = 0;

        for(let n of nums) {
            if(set.has(n-1)) continue;
            
            curMax = 1;
            
            while(set.has(n+1)) {
                curMax++;
                n++;
            }

            res = Math.max(res, curMax);
        }

        return res;
    }
}
