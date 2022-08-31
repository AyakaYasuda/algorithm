/*

What is recursion?
- Recursion is when you define something in terms of itself, simply it's a function that refers to itself inside of the function.
- Recursion is good for tasks that have repeated subtasks to do.

*/

// 1. Identify the base case.
// 2. Identify the recursive case.
// 3. Get closer and closer to the base case and return when needed. Usually you have 2 returns.


let counter = 0;

function inception() {
  console.log(counter);
  // base case
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  // recursive case
  return inception();
}

console.log(inception());
