/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

*/

// create a hash map - key: number, value: boolean
// iterate through the array - i = 0; i <= nums.length; i++
// check if there is nums[i] in the hash map
// if !hashMap[i] return i

const missingNumber = (nums) => {
  let map = {};
  for (const item of nums) {
    map[item] = true;
  }

  for (let i = 0; i <= nums.length; i++) {
    if (!map[i]) return i;
  }

  return -1;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

const missingNumberSorting = (nums) => {
  nums.sort((a, b) => {
    return a - b;
  });

  if (nums[nums.length - 1] !== nums.length) return nums.length;

  if (nums[0] !== 0) return 0;

  for (let i = 1; i < nums.length; i++) {
    const expectedNumber = nums[i - 1] + 1;
    if (nums[i] !== expectedNumber) {
      return expectedNumber;
    }
  }
};

console.log(missingNumberSorting([3, 0, 1]));
console.log(missingNumberSorting([0, 2]));
console.log(missingNumberSorting([9, 6, 4, 2, 3, 5, 7, 0, 1]));
