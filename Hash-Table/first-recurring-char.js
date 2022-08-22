/*
Google Question

Given an array = [2,5,1,2,3,5,1,2,4]:
It should return 2

Given an array = [2,1,1,2,3,5,1,2,4]:
It should return 1

Given an array = [2,3,4,5]:
It should return undefined
*/

// hash table - key: number(array element), value: boolean(true)

// loop over the input array
// check if(!map.has(array[i]))
// insert element into the hash table

// otherwise, return array[i]

/*

{
    2: true
    5: true
    1: true
}

*/

function firstRecurringCharacter(input) {
  const map = new Map();

  for (let i = 0; i < input.length; i++) {
    if (map.has(input[i])) {
      return input[i];
    }
    map.set(input[i], true);
  }

  return undefined;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
