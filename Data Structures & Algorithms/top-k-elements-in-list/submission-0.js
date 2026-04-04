class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map= new Map();
        const result = [];

        nums.forEach(num => map.set(num, (map.get(num) || 0) + 1));
        const sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, k);
        
        for (const [key, value] of sortedEntries) {
            result.push(key);
        }

        return result;
    }
}
