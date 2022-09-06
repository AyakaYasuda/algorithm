/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1

Example 2:

Input: nums = [4,1,2,1,2]
Output: 4

Example 3:

Input: nums = [1]
Output: 1

*/

// use a hash table
// key: number, value: how many times it appears
/*
{
    2: 2
    1: 1
}
*/
// return the key with 1 as a value

const singleNumber = (nums) => {
  let obj = {};

  for (const i of nums) {
    if (obj[i]) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }

  for (const key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
