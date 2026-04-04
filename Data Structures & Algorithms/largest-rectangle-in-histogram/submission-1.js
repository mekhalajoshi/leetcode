class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []; // [index, height]
        let max = 0;

        for(let i = 0 ; i< heights.length; i++){
            let start = i;
            while(stack.length && stack[stack.length-1][1]>heights[i]){
                const [index, height] = stack.pop();
                max = Math.max(max, height * (i-index));
                start = index;
            }
            stack.push([start, heights[i]]);
        }
        
        for(let [index, height] of stack){
            max = Math.max(max, height * (heights.length-index));
        }

        return max
    }
}
