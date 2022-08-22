/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x): Pushes element x to the back of the queue.
int pop(): Removes the element from the front of the queue and returns it.
int peek(): Returns the element at the front of the queue.
boolean empty(): Returns true if the queue is empty, false otherwise.

Notes:
You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or dequeue (double-ended queue) as long as you use only a stack's standard operations.

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false


*/

class MyQueue {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
    return this.array;
  }

  pop() {
    const backwards = [];
    for (let i = this.array.length - 1; i >= 0; i--) {
      backwards.push(this.array[i]);
    }
    const element = backwards.pop();

    this.array = [];
    for (let j = backwards.length - 1; j >= 0; j--) {
      this.array.push(backwards[j]);
    }

    return element;
  }

  peek() {
    return this.array[0];
  }

  empty() {
    if (this.array.length === 0) {
      return true;
    }
    return false;
  }
}
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const myQueue = new MyQueue();
console.log(myQueue);
console.log(myQueue.push(1));
console.log(myQueue.push(2));
console.log(myQueue.peek());
console.log(myQueue.pop());
console.log(myQueue.empty());

class MyQueue2 {
  constructor() {
    this.first = [];
    this.last = [];
  }

  push(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  pop() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }

  peek() {
    if (this.last.length !== 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue2 = new MyQueue2();
console.log(myQueue2);
console.log(myQueue2.push(1));
console.log(myQueue2.push(2));
console.log(myQueue2.push(3));
console.log(myQueue2.peek());
console.log(myQueue2.pop());
