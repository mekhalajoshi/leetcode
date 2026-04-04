class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if (map.has(compliment)) {
            result = [i, map.get(compliment)];
            break;
        } else {
            map.set(nums[i], i);
        }
    }
    return result;
    }
}
