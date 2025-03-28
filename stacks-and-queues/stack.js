class Stack {
    constructor() {
        this.stack = [];
    }

    /**
     * Add a value to the top of the stack.
     * @param {*} val
     */
    push(val) {
        this.stack.push(val);
    }

    /**
     * Remove and get the value from the top of the stack.
     * @returns {*}
     */
    pop() {
        return this.stack.pop();
    }

    /**
     * Get the value from the top of the stack.
     * @returns {*}
     */
    peek() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * Returns true if the stack is empty.
     * @returns {number}
     */
    isEmpty() {
        return this.stack.length == 0;
    }
}

module.exports = Stack;
