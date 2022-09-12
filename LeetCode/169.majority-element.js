/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

const majorityElement = (nums) => {
  const n = nums.length;
  const map = {};

  for (num of nums) {
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }

  for (num in map) {
    if (map[num] > n / 2) {
      return num;
    }
  }
};
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// [2, 3, 3] nums[Math.floor(nums.length / 2)] = 3
// [1, 1, 1, 2, 2, 2, 2, 2] nums[Math.floor(nums.length / 2)] = 2

const majorityElementSorting = (nums) => {
  nums.sort((a, b) => {
    return a - b;
  });
  return nums[Math.floor(nums.length / 2)];
};

console.log(majorityElementSorting([3, 2, 3]));
console.log(majorityElementSorting([2, 2, 1, 1, 1, 2, 2]));
