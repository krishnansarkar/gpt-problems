// Problem: Implement a Min Stack
// Category: Stacks & Queues

// Description:
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// push(val): Pushes the element val onto the stack.
// pop(): Removes the element on top of the stack.
// top(): Gets the top element.
// getMin(): Retrieves the minimum element in the stack.

// Constraints:
// All operations must run in O(1) time.
// You may use only standard stack operations (push, pop, peek).

const Stack = require("./stack");

class MinStack {
    constructor() {
        this.stack = new Stack();
        this.minimums = new Stack();
    }

    /**
     * @param {*} val
     */
    push(val) {
        this.stack.push(val);
        if (this.minimums.isEmpty() || val <= this.minimums.peek())
            this.minimums.push(val);
    }

    pop() {
        let val = this.stack.pop();
        if (this.minimums.peek() == val) {
            this.minimums.pop();
        }
    }

    /**
     * @returns {*}
     */
    top() {
        return this.stack.peek();
    }

    /**
     * @returns {*}
     */
    getMin() {
        return this.minimums.peek();
    }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Expected output: -3
minStack.pop();
console.log(minStack.top()); // Expected output: 0
console.log(minStack.getMin()); // Expected output: -2

const minStack2 = new MinStack();
minStack2.push(5);
console.log(minStack2.getMin()); // Expected output: 5
console.log(minStack2.top()); // Expected output: 5
minStack2.pop();

const minStack3 = new MinStack();
minStack3.push(2);
minStack3.push(2);
minStack3.push(1);
console.log(minStack3.getMin()); // Expected output: 1
minStack3.pop();
console.log(minStack3.getMin()); // Expected output: 2
minStack3.pop();
console.log(minStack3.getMin()); // Expected output: 2
