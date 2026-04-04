class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b)=>a[0]-b[0]);

        let res = [intervals[0]];

        for(let i of intervals){
            if(i[0] <= res[res.length - 1][1]){
                res[res.length - 1][1] = Math.max(i[1],res[res.length - 1][1])
            } else{
                res.push(i)
            }
        }
        return res
    }
}
