class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let area = 0;

        const directions = [[0,1],[0,-1],[1,0],[-1,0]];

        const dfs = (r,c) => {
            if (c < 0 || r < 0 || r >= ROWS || c >= COLS || grid[r][c] === 0) {
                return 0;
            }

            grid[r][c] = 0;
            let res = 1;
            for (const [dr,dc] of directions) {
                res += dfs(dr + r, dc + c);
            }
            return res;
        }

        for(let i=0; i<ROWS; i++) {
            for(let j=0; j<COLS; j++){
                if (grid[i][j] === 1) {
                    area = Math.max(area, dfs(i,j));
                }
            }
        }
        return area;
    }
}
