/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

<< Example 1 >>
Input: nums = [1,2,3,1]
Output: true

<< Example 2 >>
Input: nums = [1,2,3,4]
Output: false

<< Example 3 >>
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

// use a hash map
// loop over the input array with for loop (let i = 0; i < nums.length; i++)
// insert nums[i] to the hash map
// check if the hash map as nums[i] as a key
//      true -> return true
//      false -> return false

// [1,2,3,1]
/*
{
    1: true
    2: true
    3: true
}
*/

const containsDuplicate = (nums) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) return true;

    map[nums[i]] = true;
  }

  return false;
};

const containsDuplicate2 = (nums) => {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;

    set.add(nums[i]);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

console.log(containsDuplicate2([1, 2, 3, 1]));
console.log(containsDuplicate2([1, 2, 3, 4]));
console.log(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
