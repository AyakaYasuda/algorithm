// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// 5!
// num = 5  fn(4)
// num = 4  fn(3)
// num = 3  fn(2) -> 2
// -> 3 * 2 = 6
// -> 4 * 6 = 24
// -> 5 * 24 = 120

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }

  return number * findFactorialRecursive(number - 1);
}
// O(n)


function findFactorialIterative(number) {
  let answer = 1;

  if (number === 2) {
    answer = 2;
  }

  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }

  return answer;
}
// O(n)

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
