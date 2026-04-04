class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length
        const COLS = grid[0].length
        
        let islands = 0

        const directions = [[0,1],[0,-1],[1,0],[-1,0]]

        const bfs = (r,c) => {
            const q = [];
            q.push([r,c]);
            grid[r][c] = '0'

            while(q.length){
                const[row,col] = q.shift()
                for(const [dr,dc] of directions) {
                    const nr = row + dr
                    const nc = col + dc
                    
                    if(nr >= 0 &&
                        nc >=0 &&
                        nr < ROWS &&
                        nc < COLS && 
                        grid[nr][nc] === '1'
                        ) {
                        q.push([nr,nc])
                        grid[nr][nc] = '0'
                    }
                }
            }
            

        }

        for(let r=0; r<ROWS; r++){
            for(let c=0; c<COLS; c++){
                if(grid[r][c] === '1'){
                    bfs(r,c)
                    islands++;
                }
            }
        }

        return islands;

        
    }
}
