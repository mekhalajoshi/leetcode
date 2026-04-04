class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let count = 0;
        let res = 0;

        for (let i=0; i<nums.length; i++) {
            if(!set.has(nums[i]-1)){
                count = 0;
                while(set.has(nums[i]+count)) {
                    count++;
                }
                res = Math.max(res,count);
            }
        }
        return res;
    }
}
