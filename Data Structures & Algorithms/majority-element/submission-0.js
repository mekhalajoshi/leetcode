class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        nums.sort((a,b)=>a-b);
        let i=0 , res = 0;
        while(i<nums.length){
            let count = 0;
            let cur = nums[i];
            while(nums[i] === cur){
                count++;
                i++;
            }
            if(count>nums.length/2){
                return nums[i-1]
            }
        }

    }
}
