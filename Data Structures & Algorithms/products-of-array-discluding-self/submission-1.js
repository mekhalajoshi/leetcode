class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        let res = new Array(n).fill(1);

        let pre = 1;
        for(let i = 0; i < n; i++){
            res[i] = pre;
            pre *= nums[i]
        }

        let post = 1;
        for(let i = n-1; i >= 0; i--){
            res[i] *= post;
            post *= nums[i]
        }
        return res;
    }
}
