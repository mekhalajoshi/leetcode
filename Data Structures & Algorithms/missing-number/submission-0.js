class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let sum  = 0;
        let indexSum = 0;
        // let indexSum = nums.length;

        for(let i=0; i <= nums.length; i++){
            sum += nums[i] ?? 0;
            indexSum += i; 
        }

        return indexSum - sum;
    }
}
