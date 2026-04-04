class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];

        const backtrack = (index, current) => {
            
            for (let i = index; i < nums.length; i++) {
                current.push(nums[i]);
                backtrack( i + 1, current);
                current.pop();
            }
            result.push([...current]);
        }

        backtrack(0,[]);
        return result;
    }
}
