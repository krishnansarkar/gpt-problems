// Problem: Find the Middle of a Linked List
// Description: Given the head of a singly linked list, return the middle node. If there are two middle nodes, return the second middle node.

// Example 1:
// Input: [1,2,3,4,5]
// Output: 3

// Example 2:
// Input: [1,2,3,4,5,6]
// Output: 4

const LinkedList = require("./linked-list");

class Solution {
    /**
     *
     * @param {LinkedList} linkedList
     * @returns {number}
     */
    findMiddle(linkedList) {
        var slow = linkedList.head;
        var fast = slow;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
    }
}

const list = new LinkedList();
list.fromArray([1, 2, 3, 4, 5]);
list.print();

const solution = new Solution();
console.log(solution.findMiddle(list));

// Time-complexity: O(n)
// Space-complexity: O(1)
