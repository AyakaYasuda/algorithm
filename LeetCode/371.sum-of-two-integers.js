/*
Given two integers a and b, return the sum of the two integers without using the operators + and -.

Example 1:

Input: a = 1, b = 2
Output: 3

Example 2:

Input: a = 2, b = 3
Output: 5
*/

/*

when adding binary numbers

A    |B    |sum  |carry  
0    |0    |0    |0 
1    |0    |1    |1
0    |1    |1    |1
1    |1    |0    |1

sum is XOR, carry is AND
XOR: exclusive OR, results in 1 only when one of operands is 1, 0 otherwise.
AND: results in 1 when both operands are 1, 0 otherwise.

        2^3  2^2  2^1  2^0
carry    1
4             1    0    0
5             1    0    1
sum      1    0    0    1

        10^2  10^1  10^0
carry           1 
4         1     2     2
5               4     9       
sum       1     7     1

*/

/*
        2^3  2^2  2^1  2^0
carry              0    0
1                  0    1
2                  1    0
sum                1    1

        2^3  2^2  2^1  2^0
carry         1 <- 1    0
2                  1    0
3                  1    1
sum           1    0    1

        2^3  2^2  2^1  2^0
carry          
4             1    0    0
1             0    0    1
sum           1    0    1

*/

const getSum = (a, b) => {
  let carry;
  while (a !== 0) {
    carry = a & b; //AND
    b = a ^ b; //XOR
    a = carry << 1;
  }
  return b;
};

console.log(getSum(1, 2));
console.log(getSum(2, 3));
