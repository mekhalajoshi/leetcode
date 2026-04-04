class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = []
        strs.sort();
        let first = strs[0];
        let last = strs[strs.length-1]
        for(let i=0; i< first.length; i++){
            if(first[i]!==last[i]){
                break;
            }
                res.push(first[i])
        }
        return res.join('');
    }
}
