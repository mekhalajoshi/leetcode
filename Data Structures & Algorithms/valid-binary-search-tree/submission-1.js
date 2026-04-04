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
     * @return {boolean}
     */
    isValidBST(root) {
        let res = true;
        const dfs = (cur, left, right) => {
            if(!cur) {
                return; 
            }
            if (!(cur.val > left && cur.val < right)){
                res = false;
                return; 
            }

            dfs(cur.left, left, cur.val);
            dfs(cur.right, cur.val, right);
        }
        dfs(root, -Infinity, Infinity)
        return res;
    }
}
