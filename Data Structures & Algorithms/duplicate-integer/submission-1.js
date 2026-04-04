class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();

        for (const num of nums) {
            if(set.has(num)) {
                return true;
            }else {
                set.add(num);
            }
        }
        return false;
    }
}
