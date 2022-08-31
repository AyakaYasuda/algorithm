// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// [0, 1]
// [0, 1, 1]
// [0, 1, 1, 2]
// [0, 1, 1, 2, 3]

// n = 4
// fibonacciRecursive(3) + fibonacciRecursive(2)
// fibonacciRecursive(2) + fibonacciRecursive(1) + fibonacciRecursive(1) + fibonacciRecursive(0)
// fibonacciRecursive(1) + fibonacciRecursive(0) + fibonacciRecursive(1) + fibonacciRecursive(1) + fibonacciRecursive(0)
// 1 + 0 + 1 + 1 + 0
// -> 3


function fibonacciIterative(n) {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}
// O(n)

function fibonacciRecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
// O(2^n)

console.log(fibonacciIterative(8));
console.log(fibonacciRecursive(8));
