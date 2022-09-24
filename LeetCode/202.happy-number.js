/*

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

Example 1:
Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

Example 2:
Input: n = 2
Output: false
Explanation:
2^2 = 4
4^2 = 16
1^2 + 6^2 = 37
3^2 + 7^2 = 58
5^2 + 8^2 = 89
8^2 + 9^2 = 145
1^2 + 4^2 + 5^2 = 42
4^2 + 2^2 = 20
2^2 + 0^2 = 4

Example 3:
Input: n = 7
Output: true
Explanation:
7^2 = 49
4^2 + 9^2 = 97
9^2 + 7^2 = 130
1^2 + 3^2 + 0^2 = 10
1^2 + 0^2 = 1
*/

const isHappy = (n) => {
  let hashmap = {};

  const func = (n) => {
    const arr = String(n).split('');
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += Math.pow(Number(arr[i]), 2);
    }

    if (sum === 1) {
      return true;
    }

    if (!hashmap[sum]) {
      hashmap[sum] = true;
    } else {
      return false;
    }

    return func(sum);
  };

  return func(n);
};

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
