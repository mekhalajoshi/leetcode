class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let res = [];
        if (digits.length === 0) return [];

        const digitToChar = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'qprs',
            8: 'tuv',
            9: 'wxyz',
        };

        const dfs = (cur, i) => {
            if(i === digits.length){
                res.push(cur);
                return;
            }
            
            for (let c of digitToChar[digits[i]]) {
                dfs(cur + c, i + 1);
            }
        }

        dfs("", 0);
        return res;
    }
}
        

