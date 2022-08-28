/*

Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

// while loop with two pointer: i, j (i < j)
// ["h","e","l","l","o"]
//   i               j
// temp = input[i]
// input[i] = input[j]
// input[j] = temp
// ["o","e","l","l","h"]
//       i       j
// ["o","l","l","e","h"]

const reverseString = (s) => {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;

    i++;
    j--;
  }
  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
