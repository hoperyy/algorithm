const data = require('./data');
var MyStack = function () {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }

    return this.queue1.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }

    return this.queue1[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.queue1.length && !this.queue2.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// const result = run('{()}');

// console.log('result: ', result);

const obj = new MyStack();

obj.push(1);
obj.push(2);
// console.log(obj.stack1, obj.stack2);
console.log(obj.pop());
// console.log(obj.stack1, obj.stack2);
console.log(obj.top());
console.log(obj.empty());