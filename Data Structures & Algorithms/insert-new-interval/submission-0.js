class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let res = [];

        for(let interval of intervals){

            if(newInterval===null || interval[1]< newInterval[0]){
                res.push(interval);
            } else if(interval[0] > newInterval[1]){
                res.push(newInterval);
                res.push(interval);
                newInterval = null;
            }else{
                newInterval[0] = Math.min(newInterval[0], interval[0]);
                newInterval[1] = Math.max(newInterval[1], interval[1]);
                
            }

        }
        if(newInterval !== null){
                    res.push(newInterval)

                }
        return res
    }
}
