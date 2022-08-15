// Create a function that reverses a given string

// << Idea 1 >>
// check input: !str || str.length < 2 || typeof str !== "string" --> return null
// create a new array called backwards
// loop over the str from the end and push the element to the backwards array
// convert the backwards array into string
// return string

// << Idea 2 >>
// use javascript built-in method to make code cleaner

// << Idea 3 >>
// convert input string into an array called strArr
// loop over input string using while loop with two pointers: i and j
// i starts from the beginning of the string: i = 0
// j starts from the end of the string: j = str.length - 1
// the condition: i < j
// replace the element one by one with temp variable: temp = str[i] -> str[i] = str[j] -> str[j] = temp
// get strArr back to string
// return string

// H e l l o
// o e l l H

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return null;
  }

  const backwards = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

function reverse2(str) {
  return str.split('').reverse().join('');
  //   return [...str].reverse().join('');
}

function reverse3(str) {
  let i = 0;
  let j = str.length - 1;

  let strArr = str.split('');

  while (i < j) {
    let temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    i++;
    j--;
  }

  return strArr.join('');
}

console.log(reverse('Hello'));
console.log(reverse2('Hello'));
console.log(reverse3('Hello'));
