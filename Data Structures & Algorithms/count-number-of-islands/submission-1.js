class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let res = 0;
        let R = grid.length;
        let C = grid[0].length;

        let directions = [[0,1], [0,-1], [1,0], [-1,0]];

        const dfs = (i, j)=>{
            if(i<0 || j<0 || i>R-1 || j>C-1 || grid[i][j]=== '0'){
                return;
            }
            grid[i][j] = '0';
            for(let [dr,dc] of directions){
                dfs(i+dr, j+dc)
            }
        }

        for(let i = 0; i < R; i++){
            for(let j=0; j<C; j++){
                if(grid[i][j] === '1'){
                    dfs(i,j);
                    res++
                }
            }
        }
        return res
    }
}
