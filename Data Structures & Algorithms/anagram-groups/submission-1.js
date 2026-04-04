class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const res = [];
            console.log(map)

        for( const str of strs) {
            const sorted = str.split('').sort().join('');

            if (!map.has(sorted)){
                map.set(sorted, [str]);
            } else {
                map.set(sorted, [...map.get(sorted), str]);
                
            }
            
        }

        for (const [key,value] of map.entries()) {
            res.push(value);
        }
        return res;
    }
}
