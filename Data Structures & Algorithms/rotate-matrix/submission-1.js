class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        let m = matrix.length;
        let n = matrix[0].length;
        const result = Array.from({ length: n }, () => new Array(m));

      for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            result[c][m - 1 - r] = matrix[r][c];
        }
    }
matrix.length = 0;
for (const row of result) matrix.push(row);
    }


 

 
}
