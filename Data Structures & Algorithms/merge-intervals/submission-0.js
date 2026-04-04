class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        //Sort
        intervals.sort((a,b)=>a[0]-b[0]);
        let res = [intervals[0]];

        for (let i=1; i< intervals.length; i++){
            let s = intervals[i][0];
            let e = intervals[i][1];
            let lastEnd = res[res.length-1][1];

            if(lastEnd >= s){
                res[res.length-1][1] = Math.max(lastEnd, e);
            }else{
                res.push(intervals[i]);
                lastEnd = e
            }
        }
        return res
    }
}
