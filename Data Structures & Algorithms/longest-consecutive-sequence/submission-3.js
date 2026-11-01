class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let res = 0;

        for (let n of nums){
            let curMax = 1;
            if(!set.has(n-1)){
                while(set.has(n+1)){
                    n++
                    curMax++
                }
            }
            res = Math.max(res, curMax)
        }
        return res
    }
}
