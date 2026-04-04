class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const m = grid.length;
        const n = grid[0].length;
        let time = 0;
        const directions = [[0,1],[0,-1],[1,0],[-1,0]];
        let freshFruit = 0;

        const q = [];
        // find all rotten fruit & add to queue
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++) {
                if(grid[i][j] === 2) {
                    q.push([i,j]);
                }
                if(grid[i][j] === 1) {
                    freshFruit++;
                }
            }
        }

        // mark all adj fresh fruit rotten 
        //increment time 
        const bfs = () => {
            while(freshFruit > 0 && q.length){
                const qLength = q.length;

                for (let k=0; k<qLength; k++) {
                    const cur = q.shift();

                    for (const dir of directions){
                        let nr = cur[0] + dir[0];
                        let nc = cur[1] + dir[1];
                        
                        if(nr < m && 
                            nr >= 0 && 
                            nc >= 0 && 
                            nc < n && 
                            grid[nr][nc] === 1) {
                                q.push([nr,nc]);
                                grid[nr][nc] = 2;
                                freshFruit--;
                            }
                    }
                }
                time++;
            }    
        } 

        // start multi source bfs
         bfs();

        // return time
        return freshFruit === 0 ? time : -1
    }
}
