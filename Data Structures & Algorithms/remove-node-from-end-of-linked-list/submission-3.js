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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0, head);
        let f = dummy;
        let s = dummy;
        let prev = null;

        while(n > 0){
            f = f.next;
            n--;
        } 

        while (f.next) {
            s = s.next;
            f = f.next;
        }

        s.next = s.next.next;

        return dummy.next
    }
}
