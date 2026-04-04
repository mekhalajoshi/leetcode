class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];

        const dfs  = (cur, open, closed) => {
            if (open === n && closed === n) {
                res.push(cur);
                return;
            }

            if(open < n){
                dfs(cur + '(', open+1, closed);
            }
            if (closed < open) {
                dfs(cur + ')', open, closed+1);
            }
            

        }

        dfs("",0,0);
        return res;
    }

}
