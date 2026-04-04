class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let l=0, r=0;
        while( r < nums.length){
            if(nums[r] !== val){
                nums[l] = nums[r];
                r++;
                l++;
            }else{
                r++
            }
        }
        return l
    }
}
