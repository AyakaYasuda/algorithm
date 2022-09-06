/*
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
   3
9     20
   15     7

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const maxDepth = function (root) {
  let maxDepth = 0;

  if (!root) return maxDepth;

  const dfs = (node, level) => {
    if (node === null) return;

    if (level > maxDepth) maxDepth = level;

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };

  dfs(root, 1);
  return maxDepth;
};


/*
   3
9     20
   15     7
*/

// dfs(3, 1) maxDepth = 1
// dfs(9, 2) maxDepth = 2
// dfs(null, 3) dfs(null, 3)
// -> x
// dfs(20, 2) maxDepth = 2
// dfs(15, 3) maxDepth = 3
// dfs(null, 4) dfs(null, 4)
// -> x
// dfs(7. 3) maxDepth = 3
// dfs(null, 4) dfs(null, 4)
// -> x
