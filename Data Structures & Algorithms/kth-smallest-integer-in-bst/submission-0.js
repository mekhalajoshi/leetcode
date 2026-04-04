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

        const dfs = (cur,i) => {
            if(!cur) {
                return;
            }
            
            dfs(cur.left, i+1);
            resArray.push(cur.val);
            if (resArray.length === k){
                return;
            }
            dfs(cur.right, i+1);
        }

        dfs(root, 1);
        return resArray[k-1];
    }
}
