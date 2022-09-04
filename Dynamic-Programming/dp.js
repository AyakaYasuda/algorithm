// Dynamic Programming = Divide & Conquer + Memoization

// fibonacci function O(2^n) -> O(n)
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

function fibonacci(n) {
  // O(2^n)
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster() {
  // O(n)
  let cache = {};
  console.log(cache);
  return function fib(n) {
    if (cache[n]) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}
const fasterFib = fibonacciMaster();
console.log(fasterFib(10));
console.log(fasterFib(10));

function fibonacciMaster2(n) {
  const answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }

  return answer.pop();
}
console.log(fibonacciMaster2(10));
