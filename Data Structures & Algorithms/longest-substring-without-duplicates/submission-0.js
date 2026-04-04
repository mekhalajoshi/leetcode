class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let i = 0;
        let j = 0;
        let res = 0;

        for (let j=0; j<s.length; j++) {
            while(charSet.has(s[j])) {
                charSet.delete(s[i]);
                i++;
            }
            res = Math.max(res, j - i + 1);
            charSet.add(s[j]);
        }
        return res;
    }
}
