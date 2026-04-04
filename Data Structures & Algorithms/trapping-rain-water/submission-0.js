class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (height.length === 0) return 0;
        let l = 0;
        let r = height.length-1;
        let leftMax = height[l];
        let rightMax = height[r];
        let cur  = 0;
        let res = 0;

        while(l<r) {
            if (leftMax <rightMax) {
                l++;
                cur = leftMax - height[l];
                leftMax = Math.max(leftMax,height[l]); 
            } else {
                r--;
                cur = rightMax - height[r];
                rightMax = Math.max(rightMax,height[r]); 
            }
            res += cur > 0 ? cur : 0; 
        }
        return res;
    }
}
