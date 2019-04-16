# 题目

https://leetcode.com/problems/implement-queue-using-stacks/submissions/

# 解法 1：为 stack2 添加项的前提是 stack2 为空。只能使用 `shift / unshift`。

1. `peek / pop` 操作 `stack2`
2. `push` 操作 `stack1`

```js
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.createNew = function () {
    return new MyQueue();
};

MyQueue.prototype.push = function (x) {
    this.stack1.unshift(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // move from stack1 to stack2
    if (!this.stack2.length) {
        while (this.stack1.length) {
            this.stack2.unshift(this.stack1.shift());
        }
    }

    return this.stack2.shift();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // move from stack1 to stack2
    if (!this.stack2.length) {
        while (this.stack1.length) {
            this.stack2.unshift(this.stack1.shift());
        }
    }

    return this.stack2[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.stack1.length && !this.stack2.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```