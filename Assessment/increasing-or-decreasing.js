const arrayChallenge = (arr) => {
  let isIncreasing = false;
  if (arr[0] < arr[1]) {
    isIncreasing = true;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (isIncreasing) {
      if (arr[i] > arr[i + 1]) {
        return i;
      }
    } else {
      if (arr[i] < arr[i + 1]) {
        return i;
      }
    }
  }
  return null;
};

console.log(arrayChallenge([1, 2, 3, 2, 1]));
console.log(arrayChallenge([-1, -2, -3, -2, -1]));
console.log(arrayChallenge([1, 2, 3, 7, 8]));
console.log(arrayChallenge([1, 2, 3, 7, 8, 7]));
