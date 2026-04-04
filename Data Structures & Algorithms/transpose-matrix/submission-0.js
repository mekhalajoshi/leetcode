class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
        let ROWS = matrix.length;
        let COLS = matrix[0].length;

        const res = Array.from({ length: COLS }, () => Array(ROWS).fill(0));

        for(let i=0; i<ROWS; i++){
            for(let j =0; j<COLS; j++){
                res[j][i] = matrix[i][j];
            }
        }
        return res
    }
}
