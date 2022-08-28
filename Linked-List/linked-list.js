const basket = ['apples', 'grapes', 'pears'];

/*
 * linked list: apples -> grapes -> pears
 *
 * apples
 *  8479  --->  grapes
 *               8742  --->  pears
 *                            372   --->  null
 *
 */

let obj1 = { a: true };
let obj2 = obj1; // obj2 points the reference of obj1
obj1.a = 'boo';
delete obj1;
obj2 = 'hello';
// console.log('1', obj1);
console.log('2', obj2);
// In JavaScript, you can't delete objects, they are removed when there are no more references to them by the garbage collector.
// Point: removing an object doesn't necessarily remove a specific property being referenced by another object.

// 10 --> 5 --> 16
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     }, // points reference
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    const newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1); // the pointer to 10
    const holdingPointer = leader.next; // the pointer to 5
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index === 0) {
      const unwantedNode = this.head;
      this.head = unwantedNode.next;
      this.length--;
      return this.printList();
    }

    if (index >= this.length) {
      return this.printList();
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

// 1 --> 10 --> 99 --> 5 --> 16

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(2, 99));
console.log(myLinkedList.insert(100, 88));
console.log(myLinkedList.remove(0));
console.log(myLinkedList.remove(2));
console.log(myLinkedList.remove(99));
console.log(myLinkedList.printList());
console.log(myLinkedList);
console.log(myLinkedList.reverse());
