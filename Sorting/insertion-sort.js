// loop over every element and place it in the right position

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
// [44, 99, 6, 2, 1, 5, 63, 87, 283, 4, 0]
// [6, 44, 99, 2, 1, 5, 63, 87, 283, 4, 0]
// [2, 6, 44, 99, 1, 5, 63, 87, 283, 4, 0]
// [1, 2, 6, 44, 99, 5, 63, 87, 283, 4, 0]
// [1, 2, 5, 6, 44, 99, 63, 87, 283, 4, 0]

function insertionSort(array) {
  const length = array.length;
  for (let i = 1; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      if (array[i] < array[i - 1]) {
        for (let j = 1; j < i; j++) {
          if (array[j - 1] <= array[i] && array[i] < array[j]) {
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
}
// O(n^2) or O(n)

insertionSort(numbers);
console.log(numbers);
