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
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) null;
        let cur = head;
        let prev = null;
        let temp = null;

        while(cur !== null){
            temp = cur.next;
            cur.next = prev;
            prev = cur; 
            cur = temp;
        }
        return prev;
    }
}
