class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1);

        for(let i = 1; i < n; i++){
            res[i] = res[i - 1] * nums[i - 1];
        }

        let post = 1;
        for(let i = n - 1; i >= 0; i--){
            res[i] *= post;
            post *= nums[i]; 
        }
        return res;
    }
}