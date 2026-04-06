class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let map = new Map();
        let res = 0;
        let sum = 0;
        map.set(0,1);

        for(let num of nums){
            sum += num;
            let diff = sum - k;
            res += map.get(diff) || 0;    
            map.set(sum, (map.get(sum)||0)+1)
        }

        return res
    }
}
