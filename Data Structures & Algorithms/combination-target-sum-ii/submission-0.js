class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let ans = [];
        let cur = [];
        candidates.sort((a, b) => a - b);

        const backtrack = ( i, cur, target) => {
            if (target === 0) {
                ans.push([...cur]);
                return;
            } else if (target < 0 || i >= candidates.length) {
                return;
            } 
            
            cur.push(candidates[i]);
            backtrack(i + 1, cur, target - candidates[i]);
            cur.pop();

            while ( i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
                i++;
            }
            backtrack(i + 1,  cur, target);
            
        }
        backtrack(0, cur, target);
        return ans;
    }
}
