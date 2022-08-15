/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

case1:
    nums = [2,7,11,15], target = 9
    output => [0,1]
case2: 
    nums = [11,7,15,2], target = 9
    output => [1,3]
case3: 
    nums = [11,7,15,2], target = 13
    output => [0,3]

*/

// use a map named numsMap: key is number element, value is index
// {
//     2: 0,
//     7: 1,
//     11: 2,
//     15: 3
// }
// iterate through nums with a for loop
// define a variable: const dif = target - nums[i]
// if there's no such key matching dif set num[i] as key and i as value in numsMap

// i = 1: nums[i] = 2 => dif = 9 - 2 = 7
// {
//     2: 0
// }

// i = 2: nums[i] = 7 => dif = 9 - 7 = 2
// there's 2 key in a map => return [numsMap.get(dif), i]

const twoSumFunc = (nums, target) => {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const dif = target - nums[i];
    if (numsMap.has(dif)) {
      return [numsMap.get(dif), i];
    } else {
      numsMap.set(nums[i], i);
    }
  }

  return null;
};

console.log(twoSumFunc([2, 7, 11, 15], 9));
console.log(twoSumFunc([11, 7, 15, 2], 9));
console.log(twoSumFunc([11, 7, 15, 2], 13));

// Time Complexity: O(N)
// Space Complexity: O(N)