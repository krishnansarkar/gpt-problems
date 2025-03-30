// Problem: Reverse Nodes in k-Group
// Given the head of a singly linked list, reverse the nodes of the list k at a time, and return the modified list.
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k, the remaining nodes (after reversing the last complete group of k) should stay in their original order.
// You may not alter the values in the list's nodes—only the nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Constraints:
// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

const LinkedList = require("./linked-list");
const Stack = require("../stacks-and-queues/stack");

class Solution {
    /**
     *
     * @param {LinkedList} list
     * @param {number} k
     */
    reverse(list, k) {
        var stack = new Stack();
        var left = 0;
        var currentNode = list.head;

        var firstBatch = true;
        var startingNode = list.head;
        while (true) {
            // console.log(`=>${currentNode.value}`);
            var count = 0;
            while (count < k && currentNode) {
                stack.push(currentNode);
                currentNode = currentNode.next;
                count++;
            }
            //console.log(stack);
            if (count == k) {
                var nextNode = currentNode;
                currentNode = stack.pop();
                if (firstBatch) list.head = currentNode;
                else startingNode.next = currentNode;
                while (!stack.isEmpty()) {
                    let nextNode = stack.pop();
                    currentNode.next = nextNode;
                    currentNode = nextNode;
                }
                currentNode.next = nextNode;
                startingNode = currentNode;
                currentNode = nextNode;
                firstBatch = false;
            } else {
                break;
            }
            // list.print();
        }
    }
}

// Time-complexity: O(n)
// Space-complexity: O(1)

const solution = new Solution();
var linkedList;

linkedList = new LinkedList();
linkedList.fromArray([1, 2, 3, 4, 5]);
linkedList.print();
solution.reverse(linkedList, 2);
linkedList.print(); // [2, 1, 4, 3, 5]

console.log("---");
linkedList = new LinkedList();
linkedList.fromArray([1, 2, 3, 4, 5]);
linkedList.print();
solution.reverse(linkedList, 3);
linkedList.print(); // [3, 2, 1, 4, 5]

console.log("---");
linkedList = new LinkedList();
linkedList.fromArray([1, 2, 3]);
linkedList.print();
solution.reverse(linkedList, 1);
linkedList.print(); // [1 ,2, 3]

console.log("---");
linkedList = new LinkedList();
linkedList.fromArray([1, 2, 3, 4]);
linkedList.print();
solution.reverse(linkedList, 4);
linkedList.print(); // [4, 3, 2, 1]

console.log("---");
linkedList = new LinkedList();
linkedList.fromArray([1, 2, 3, 4, 5, 6, 7]);
linkedList.print();
solution.reverse(linkedList, 3);
linkedList.print(); // [3, 2, 1, 6, 5, 4, 7]

console.log("---");
linkedList = new LinkedList();
linkedList.fromArray([1, 2]);
linkedList.print();
solution.reverse(linkedList, 3);
linkedList.print(); // [1, 2]
