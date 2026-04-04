/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let res = new ListNode(0);
        let cur = res;
        let ans =0;
        while(l1 || l2){

            if(l1) {ans+=l1.val;l1=l1.next}
            if(l2) {ans+=l2.val;l2=l2.next;}

            cur.next = new ListNode(ans%10);
            cur = cur.next;
            ans = ans>=10 ? 1 : 0;  

        }
        if(ans===1) {
            cur.next = new ListNode(1);
        }
        return res.next
    }
}
