class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let num1 = 0;
        let num2 = 0;

        for (const num of nums) {
            const temp = Math.max((num1 + num), num2);
            num1 = num2;
            num2 = temp;
        }

        return num2;
    }
}
