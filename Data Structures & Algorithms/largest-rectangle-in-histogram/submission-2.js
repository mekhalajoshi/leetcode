class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let s = [];
        let res = 0; 

        for(let i=0; i<heights.length; i++){
            let start = i;
            while(s.length && s[s.length-1][1] > heights[i]){
                let [index, height] = s.pop();
                res = Math.max(res, height * (i - index));
                start = index;
            }
            s.push([start, heights[i]]);
        }

        for(let [k,v] of s){
            res = Math.max(res, v * (heights.length - k));
        }
        return res
    }
}
