class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length-1
        let res = 0;

        while(l<r){
            if(heights[l] <= heights[r]){
                res  = Math.max(res, heights[l] * (r-l))
                l++;
            } else { 
                res  = Math.max(res, heights[r] * (r-l))
                r--;
            }
        }
        return res
    }
}
