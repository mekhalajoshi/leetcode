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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];

        const result = [];
        const q = [root];

        while(q.length){
            const qlen = q.length;
            const level = [];
            
            for (let i=0; i<qlen; i++){
                const node = q.shift();
                level.push(node.val);
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }

            result.push(level);
        }
        return result;
    }
}
