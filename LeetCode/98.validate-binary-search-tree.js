/* 
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:
   2  
1     3
Input: root = [2,1,3]
Output: true

Example 2:
   5
1     4
    3   6
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

*/

// The node in the left side should be less than root.val
// The node in the right side should be greater than root.val

class TreeNode {
  constructor(val, left, right) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
}

const isValidBST = (root) => {
  return dfs(root, -Infinity, Infinity);
};

const dfs = (node, min, max) => {
  if (!node) {
    return true;
  }

  if (node.val <= min || node.val >= max) {
    return false;
  }

  return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
};

// [2,1,3]

// dfs(2, -Infinity, Infinity)
// dfs(1, -Infinity, 2) 
// dfs(null, -Infinity, 1) && dfs(null, 1, 2)
// -> true && true
// dfs(3, 2, Infinity)
// dfs(null, 2, 3) && dfs(null, 3, Infinity)
// -> true && true


// [5,1,4,null,null,3,6]


