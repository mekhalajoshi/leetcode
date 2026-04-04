class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        nums.sort((a,b)=>a-b);
        return nums[Math.floor(nums.length/2)];

    }
}
