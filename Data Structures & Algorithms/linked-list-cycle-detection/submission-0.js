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
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head) return false;

        let s = head;
        let f = head;

        while(f !== null && f.next !== null) {
            f = f.next.next;
            s = s.next;

            if (s === f) {
                return true;
            }
        }

        return false;
    }
}
