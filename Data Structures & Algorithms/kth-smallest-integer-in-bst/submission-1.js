/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let resArray = [];

        const dfs = (cur) => {
            if(!cur) {
                return;
            }
            
            dfs(cur.left);
            resArray.push(cur.val);
            dfs(cur.right);
        }

        dfs(root);
        return resArray[k-1];
    }
}
