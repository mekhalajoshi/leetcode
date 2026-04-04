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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];

        const result = [];
        const q = [root];

        while(q.length){
            const qlen = q.length;
            let right = null;
            
            for (let i=0; i<qlen; i++){
                const node = q.shift();
                right = node;
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }

            result.push(right.val);
        }
        return result;
    }
}
