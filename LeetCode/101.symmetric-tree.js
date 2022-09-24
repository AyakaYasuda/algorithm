/*

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:

    1
  2   2
3  4 4  3

Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:

    1
  2   2
   3    3

Input: root = [1,2,2,null,3,null,3]
Output: false

*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const isSymmetric = (root) => {
  return isMirror(root, root);
};

const isMirror = (node1, node2) => {
  if (node1 === null && node2 === null) return true;
  if (node1 === null || node2 === null) return false;

  return (
    node1.val === node2.val &&
    isMirror(node1.left, node2.right) &&
    isMirror(node1.right, node2.left)
  );
};
