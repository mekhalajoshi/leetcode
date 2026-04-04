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
     * @return {TreeNode}
     */
    invertTree(root) {
        if( !root ) return null;
        const q = [root];
        
        while(q.length){
            let currentLength = q.length;

            for (let i=0; i<currentLength; i++){
                const node = q.shift();
                [node.left, node.right] = [node.right, node.left];
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }
        }
        return root;
    }
}
