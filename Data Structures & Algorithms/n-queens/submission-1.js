class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const board = Array.from({ length: n }, () => Array(n).fill('.'));
        const res = []

        const cols = new Set()
        const pDiag = new Set()
        const nDiag = new Set()

        const dfs = (r) => {
            if(r === n) {
                res.push(board.map((row) => row.join('')))
                return;
            }

            for (let c=0; c<n; c++) {
                if(cols.has(c) || pDiag.has(r-c) || nDiag.has(r+c)) continue; 
                
                cols.add(c)
                pDiag.add(r-c)
                nDiag.add(r+c)
                board[r][c] = 'Q'

                dfs (r+1)

                cols.delete(c)
                pDiag.delete(r-c)
                nDiag.delete(r+c)
                board[r][c] = '.'
            }
        }
        dfs(0)
        return res
    }
}
