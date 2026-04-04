class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = [];
        let map = new Map();

        for(let s of strs){
            let sorted = s.split('').sort().join('');
            if(map.has(sorted)){
                map.get(sorted).push(s)
            }else{
                map.set(sorted, [s])
            }
        }

        for(let [k,v] of map){
            res.push(v);
        }
        return res
    }
}
