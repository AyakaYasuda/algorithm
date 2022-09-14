/* 
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.



Example 1:

       0
   -3     9
-10     5   

     0
-10     5
   -3      9

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:
  3
1

1
  3

Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
*/

// Preorder Traversal: Always Choose Left Middle Node as a Root

// nums = [-10,-3,0,5,9]
// left: 0  right: 4  mid: 2
// root.left = create(0, 1) -> mid: 0
//     root.left = create(0, -1) -> null
//     root.right = create(1, 1) -> mid: 1
//          root.left = create(1, 0) -> null
//          root.right = create(2, 1) -> null
// root.right = create(3, 4) -> mid: 3
//     root.left = create(3, 3) -> mid: 3
//          root.left = create(3, 2) -> null
//          root.right = create(4, 3) -> null
//     root.right = create(4, 4) -> mid: 4
//          root.left = create(4, 3) -> null
//          root.right = create(5, 4) -> null

/*
    0
-10   5
   -3   9
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const sortedArrayToBST = (nums) => {
  const createNode = (left, right) => {
    if (left > right) return null;

    const midPoint = Math.floor((left + right) / 2);
   
    const root = new TreeNode(nums[midPoint]);
    root.left = createNode(left, midPoint - 1);
    root.right = createNode(midPoint + 1, right);
    return root;
  };
  return createNode(0, nums.length - 1);
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
console.log(sortedArrayToBST([1, 3]));
