class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()

        nums.forEach(n => map.set(n, (map.get(n) || 0) + 1));

        let sorted = [...map.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k);

        let res = []
        for(let [a,b] of sorted){
            res.push(a)
        }
       return res
    }
}
