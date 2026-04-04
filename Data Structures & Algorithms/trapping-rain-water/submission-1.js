class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length-1;
        let maxl = height[l];
        let maxr = height[r];
        let res = 0;
        
        while(l<r){
            if(maxl <= maxr){
                let water = maxl - height[l];
                res += water >= 0 ? water : 0;
                l++;
                maxl = Math.max(maxl, height[l]);
            }else{
                let water = maxr - height[r];
                res += water >= 0 ? water : 0;
                r--;
                maxr = Math.max(maxr, height[r]);
            }
        }
        return res
    }
}
