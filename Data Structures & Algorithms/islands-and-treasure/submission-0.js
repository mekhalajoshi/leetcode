class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const inf = 2147483647;

        const q = [];
        const visit = new Set();
        const direction = [[0,1],[0,-1],[1,0],[-1,0]];

        for(let r = 0; r < m; r++) {
            for(let c = 0; c < n; c++) {
                if(grid[r][c] === 0) {
                    q.push([r,c]);
                }
            }
        }

        const bfs = () => {
            let distance = 1;
            
            while(q.length){
            const length = q.length;

                for( let i = 0; i < length; i++) {
                    const cur = q.shift();

                    for( const dir of direction) {
                        let nr = cur[0] + dir[0];
                        let nc = cur[1] + dir[1];

                        if(nr >= 0
                         && nr < m
                         && nc >=0
                         && nc < n
                         && grid[nr][nc] === inf
                         && !visit.has(`${nr}, ${nc}`)) {
                            visit.add(`${nr}, ${nc}`);
                            grid[nr][nc] = distance;
                            q.push([nr, nc]);
                        }
                    }
                }
                distance++;
            }
        }
        bfs();
        return grid;
    }
}
