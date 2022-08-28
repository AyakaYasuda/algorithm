/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

ex.
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

*/

// being anagram means two strings have the same number of letters.
// check each length: s.length !== t.length => false
// if s.length === t.length, use a map based on s: key is letter, value is frequency(how many times the letter is used)
// {
//     a: 3
//     n: 1
//     g: 1
//     r: 1
//     m: 1
// }
// iterate through t and check if the map has the letter
// true => decrease the frequency by 1 and check if it's less than 0
// true => return false

// "nagaram"
// i = 0:
// {
//     a: 3
//     n: 0
//     g: 1
//     r: 1
//     m: 1
// }

// i = 1:
// {
//     a: 2
//     n: 0
//     g: 1
//     r: 1
//     m: 1
// }

// i = 2:
// {
//     a: 2
//     n: 0
//     g: 0
//     r: 1
//     m: 1
// }

//...

// i = 6:
// {
//     a: 0
//     n: 0
//     g: 0
//     r: 0
//     m: 0
// }

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const sMap = new Map();

  for (const letter of s) {
    if (sMap.has(letter)) {
      sMap.set(letter, sMap.get(letter) + 1);
    } else {
      sMap.set(letter, 1);
    }
  }

  for (const letter of t) {
    if (sMap.has(letter)) {
      sMap.set(letter, sMap.get(letter) - 1);
      if (sMap.get(letter) < 0) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('ab', 'a'));
console.log(isAnagram('aacc', 'cacc'));

