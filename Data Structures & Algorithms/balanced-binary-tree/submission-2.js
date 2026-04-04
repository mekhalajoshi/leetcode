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
    isBalanced(root) {
        if(!root) return true;

        const height = (node) => {
            if(!node) return 0;
            return 1 + Math.max(height(node.left), height(node.right));
        }        

        let left = height(root.left);
        let right = height(root.right);
        if(Math.abs(left - right) > 1) return false;
        return this.isBalanced(root.left) && this.isBalanced(root.right);

    }
}
