class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()

        for (let s of strs){
            let sorted = s.split('').sort().join();
            if(!map.has(sorted)){
                map.set(sorted,[])
            }
            map.get(sorted).push(s)
        }
        return [...map.values()]
    }
}
