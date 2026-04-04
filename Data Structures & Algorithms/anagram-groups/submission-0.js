class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const current = strs[i];
        const sortedString = strs[i].split('').sort().join('');
        if (map.has(sortedString)) {
            map.set(sortedString, [...map.get(sortedString), current]);
        } else {
            map.set(sortedString, [current]);
        }
    }

    const result = [];
    for (const [key, value] of map) {
        result.push(value);
    }
    return result
    }
}
