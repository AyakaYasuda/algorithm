/*
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

Example 1:

Input: columnTitle = "A"
Output: 1

Example 2:

Input: columnTitle = "AB"
Output: 28

Example 3:

Input: columnTitle = "ZY"
Output: 701

*/

// A = 1 = 26^0
// AA = 27 = 26^1 + 26^0
// AAA = 703 = 26^2 + 26^1 + 26^0
// ABC = 1 * 26^2 + 2 * 26^1 + 3 * 26^0
// 210 length: 3
// totalNumber += the corresponding letter of the number * Math.pow(26, the corresponding digit position)

const titleToNumber = (columnTitle) => {
  let total = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    total +=
      (columnTitle.charCodeAt(i) - 64) *
      Math.pow(26, columnTitle.length - i - 1);
  }
  return total;
};

console.log(titleToNumber('A'));
console.log(titleToNumber('AB'));
console.log(titleToNumber('ZY'));
