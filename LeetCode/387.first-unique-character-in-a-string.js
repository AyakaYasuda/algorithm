/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0

Example 2:

Input: s = "loveleetcode"
Output: 2

Example 3:

Input: s = "aabb"
Output: -1
*/

// "loveleetcode"
// create a hash map
// key: char
// value: object{firstIndex: number, counter: number}
/*
    {
        l: {
            firstIndex: 0,
            counter: 2
        },
        o: {
            firstIndex: 1,
            counter: 2
        },
        v: {
            firstIndex: 2,
            counter: 1
        },
        e: {
            firstIndex: 3,
            counter: 4
        },
        t; {
            firstIndex: 7,
            counter: 1
        },
        c: {
            firstIndex: 8,
            counter: 1           
        },
        d: {
            firstIndex: 10,
            counter: 1          
        }
    }
*/

const firstUniqueChar = (s) => {
  const charMap = {};

  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]]) {
      charMap[s[i]]['counter'] += 1;
    } else {
      charMap[s[i]] = {
        firstIndex: i,
        counter: 1,
      };
    }
  }
  
  for (let key in charMap) {
    if (charMap[key]['counter'] === 1) {
      return charMap[key]['firstIndex'];
    }
  }

  return -1;
};

console.log(firstUniqueChar('leetcode'));
console.log(firstUniqueChar('loveleetcode'));
console.log(firstUniqueChar('aabb'));
