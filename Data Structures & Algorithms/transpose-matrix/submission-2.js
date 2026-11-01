class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
        let r = matrix.length;
        let c = matrix[0].length;

        let res = Array.from({length:c},()=>
            Array(r).fill(0)
        );

        for(let i=0; i<r; i++){
            for(let j=0; j<c; j++){
                res[j][i] = matrix[i][j]
            }
        }
        return res
    }
}
