class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const board = Array(n).fill(null).map(() => Array(n).fill('.'));
        const cols = new Set();
        const positiveDiag = new Set();
        const negativeDiag = new Set();
        const res = []

        const dfs = (r) => {
            if (r === n) {
                res.push(board.map((row) => row.join('')))
                return
            }

            for(let c = 0; c < n; c++){
                if(cols.has(c) || positiveDiag.has(r-c) || negativeDiag.has(r+c)) {
                    continue;
                }

                cols.add(c);
                negativeDiag.add(r+c);
                positiveDiag.add(r-c)
                board[r][c] = 'Q'

                dfs(r+1)

                cols.delete(c);
                negativeDiag.delete(r+c);
                positiveDiag.delete(r-c)
                board[r][c] = '.'
            }
        }
        dfs(0)
        return res
    }
}
