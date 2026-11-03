class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        let l = 0;
        let set = new Set();

        for(let r=0; r<s.length; r++){
            while(set.has(s[r])){      
                    set.delete(s[l])
                    l++;
            }
            set.add(s[r])
            res = Math.max(res, set.size)
        }
        return res
    }
}
