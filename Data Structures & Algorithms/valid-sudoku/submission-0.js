class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let col = new Map();
        let row = new Map();
        let box = new Map();

        for(let i=0; i< board.length; i++){
            for(let j=0; j<board[0].length; j++){

                if(board[i][j] === '.' ){ continue;}

                let key = `${Math.floor(i/3)}, ${Math.floor(j/3)}`

                if(row.get(i) && row.get(i).has(board[i][j])
                    || col.get(j) && col.get(j).has(board[i][j])
                    || box.get(key) && box.get(key).has(board[i][j])){
                        return false;
                }

                if(!row.get(i)) row.set(i, new Set);
                if(!col.get(j)) col.set(j, new Set);
                if(!box.get(key)) box.set(key, new Set);

                row.get(i).add(board[i][j]);
                col.get(j).add(board[i][j]);
                box.get(key).add(board[i][j]);

            }
        }   
        return true     
    }
}
