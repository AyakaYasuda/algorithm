// instead of checking every item in the array, how can you find an item?
// binary search -> if it's sorted, you can do better than O(n)
// O(lon n)

const array = [1, 4, 6, 9, 12, 34, 45];
/*
        9
    4       34
  1   6   12  45

*/

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }

    return false;
  }
}
