/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/*
n = 3
1 1 1
  2
2 1

3
fn(2) + fn(1) = fn(n - 1) + fn(n - 2)
*/

/*
n = 4
1 1 1 1
    2
  2 1
2 1 1 
  2
  
5
fn(3) + fn(2) = fn(n - 1) + fn(n - 2)
*/

/*
n = 5 
1 1 1 1 1
      2
    2 1
  2 1 1
    2
2 1 1 1
    2 1
  2 1

8
fn(4) + fn(3) = fn(n - 1) + fn(n - 2)
*/
// [1, 2, 3, 5]

const climbStairs = (n) => {
  const myClimbStairsFunc = memoizedClimbStairs();
  return myClimbStairsFunc(n);
};

const memoizedClimbStairs = () => {
  let cache = {};

  return function climbStairsClosure(n) {
    if (cache[n]) {
      return cache[n];
    } else {
      if (!n) {
        return 0;
      }

      if (n === 1) {
        return 1;
      }

      if (n === 2) {
        return 2;
      }
      cache[n] = climbStairsClosure(n - 1) + climbStairsClosure(n - 2);
      return cache[n];
    }
  };
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));

const climbStairs2 = (n) => {
  let arr = [0];
  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }

  return arr[n];
};

console.log(climbStairs2(2));
console.log(climbStairs2(3));
console.log(climbStairs2(5));
