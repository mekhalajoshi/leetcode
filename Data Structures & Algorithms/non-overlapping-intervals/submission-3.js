class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b)=>a[0]-b[0]);
        let end = intervals[0][1];
        let res = 0;

        for(let i = 1; i< intervals.length; i++){
            if(intervals[i][0] < end){
                res++;
                end = Math.min(end,intervals[i][1] )
            }else{
                end = intervals[i][1];
            }
        }
        return res
    }
}
