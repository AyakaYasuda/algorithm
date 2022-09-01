// find the smallest number and put it at the first index and keep going

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//              [0, 44, 6, 2, 1, 5, 63, 87, 283, 4, 99]   
//                   i       min                     

function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let min = i;
    const temp = array[i];

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
// O(n^2)

selectionSort(numbers);
console.log(numbers);
