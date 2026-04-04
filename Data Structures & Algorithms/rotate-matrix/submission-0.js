class Solution {
    /**
     * @param {number[][]}
     * @return {void}
     */
    rotate(matrix) {
        matrix.reverse();
        this.transpose(matrix);
    }

    transpose = (matrix) => {
        const n = matrix.length

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
}