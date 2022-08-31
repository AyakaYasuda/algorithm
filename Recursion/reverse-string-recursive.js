//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
  if (str.length < 2) {
    return str[0];
  }

  let answer = '';
  for (let i = 0; i < str.length; i++) {
    answer = str[i] + answer;
  }

  return answer;
}

// hello
// h
// eh
// leh
// lleh
// olleh

function reverseStringRecursive(str) {
  if (str.length < 2) {
    return str[0];
  }

  return str[str.length - 1] + reverseStringRecursive(str.substr(0, str.length - 1));
}

console.log(reverseStringIterative('yoyo master'));
console.log(reverseStringRecursive('yoyo master'));
console.log(reverseStringRecursive('hello'));
//should return: 'yretsam oyoy'

// hello
// fn(hell)
// fn(hel)
// fn(he)
// fn(h) -> h
// fn(he) -> e + fn(e) -> e + h
// fn(hel) -> l + fn(he) -> l + e + h
// fn(hell) -> l + fn(hel) -> l + l + e + h
// -> o + l + l + e + h

function reverseString(str) {
  let arrayStr = str.split('');
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join('');
}

console.log(reverseString('yoyo master'));

function reverseStringRecursive2(str) {
  if (str === '') {
    return '';
  } else {
    return reverseStringRecursive2(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringRecursive2('yoyo master'));
console.log(reverseStringRecursive2('hello'));
// hello
// fn(ello)
// fn(llo)
// fn(lo)
// fn(o)
// fn("") -> ""
// fn(o) -> fn("") + o -> "" + o
// fn(lo) -> fn(o) + l -> o + l
// fn(llo) -> fn(lo) + l -> o + l + l
// fn(ello) -> fn(llo) + e -> o + l + l + e
// fn(hello) -> fn(ello) + h -> o + l + l + e + h
