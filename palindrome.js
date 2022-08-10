/*
Write a function called 'isPalindrome' which returns true if the string passed to it is a palindrome (reads the same forward and backward), otherwise it returns false.

ex.
input: refer => true
input: awesome => false
input: abcdefgfedcba => true
*/

// use while loop with two pointer: i, j
// i: right, j: left
// iterate through the input string as long as i < j and check if str[i] === str[j]
// => if not, return false

// 1st iteration
// refer
// i   j

// 2nd iteration
// refer
//  i j

const isPalindrome = (str) => {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i].toLowerCase() !== str[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome('refer'));
console.log(isPalindrome('rEfer'));
console.log(isPalindrome('awesome'));
console.log(isPalindrome('abcdefgfedcba'));

/*

Write a recursion function called "isPalindrome2"

*/

// base case: str has only one letter or two letters
// one letter => always Palindrome
// two letter => Boolean(str[0] === str[1]) means if it's Palindrome

// 1st input: refer
// 2nd input: efe
// 3rd input: f => base case applies to it

const isPalindrome2 = (str) => {
  // base case:
  if (str.length === 1) return true;
  if (str.length === 2) return str[0].toLowerCase() === str[1].toLowerCase();
  
  if (str[0].toLowerCase() === str.slice(-1).toLowerCase())
    return isPalindrome2(str.slice(1, -1));

  return false;
};

console.log(isPalindrome2('refer'));
console.log(isPalindrome2('rEfer'));
console.log(isPalindrome2('awesome'));
console.log(isPalindrome2('abcdefgfedcba'));
