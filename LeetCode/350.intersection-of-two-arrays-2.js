/*

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

*/

/*
{
    4: 0,
    9: 0,
    5: 1
}
[9,4,9,8,4]
 k
[9,4]
*/

const intersect = (nums1, nums2) => {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }

  const map = {};
  for (const num of nums1) {
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }

  let ans = [];
  let k = 0;
  while (k < nums2.length) {
    if (map[nums2[k]] && map[nums2[k]] > 0) {
      ans.push(nums2[k]);
      map[nums2[k]] -= 1;
    }
    k++;
  }

  return ans;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([9, 4, 9, 8, 4], [4, 9]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2, 2, 1], [2, 2]));

// [9, 4, 9, 8, 4], [4, 9]
// [4, 4, 8, 9, 9], [4, 9]
// 　　 　　      i       j
// nums1[i] === nums2[j]
// ans [4, 9]

const intersectSorting = (nums1, nums2) => {
  const sortArray = (arr) => {
    arr.sort((a, b) => {
      return a - b;
    });
  };

  sortArray(nums1);
  sortArray(nums2);

  let ans = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else if (nums1[i] === nums2[j]) {
      ans.push(nums1[i]);
      i++;
      j++;
    }
  }

  return ans;
};

console.log(intersectSorting([1, 2, 2, 1], [2, 2]));
console.log(intersectSorting([9, 4, 9, 8, 4], [4, 9]));
console.log(intersectSorting([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersectSorting([1, 2, 2, 1], [2, 2]));
