class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    const follower = leader.next; // the pointer to 5
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index === 0) {
      const unwantedNode = this.head;
      this.head = unwantedNode.next;
      this.head.prev = null;
      this.length--;
      return this.printList();
    }

    if (index === this.length - 1) {
      const unwantedNode = this.tail;
      this.tail = unwantedNode.prev;
      this.tail.next = null;
      this.length--;
      return this.printList();
    }

    if (index >= this.length) {
      return this.printList();
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    const follower = unwantedNode.next;
    leader.next = follower;
    follower.prev = leader;
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
}

// 1 --> 10 --> 99 --> 5 --> 16

const myDoubleLinkedList = new DoublyLinkedList(10);
console.log(myDoubleLinkedList.append(5));
console.log(myDoubleLinkedList.append(16));
console.log(myDoubleLinkedList.prepend(1));
console.log(myDoubleLinkedList.printList());
console.log(myDoubleLinkedList.insert(1, 99));
console.log(myDoubleLinkedList.remove(0));
console.log(myDoubleLinkedList.remove(2));
console.log(myDoubleLinkedList.remove(2));
