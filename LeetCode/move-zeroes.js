/*

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

< example 1 >
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

< example 2 >
Input: nums = [0]
Output: [0]

Constrains:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

*/

// loop over the input array using for loop: i = 0, i < nums.length, i++
// use one more pointer: j = 0 j is going through the position of non-zero
// if nums[i] === 0 -> do nothing
// if nums[i] !== 0 -> swap the nums[i] with nums[j] and increment j by 1

/*
[1,3,12,0,0]
          i
        j
non-zero-position
*/

/*
[1,3,12,3,12]
           i
          j
[1,3,12,0,0]

 */

const moveZeroes = (nums) => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0, 0, 1]));
