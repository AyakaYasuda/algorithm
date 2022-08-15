// create a function that merge given two arrays that are sorted

// input:  [0, 3, 4, 31],[4, 6, 30]
// output: [0, 3, 4, 4, 6, 30, 31]

// check input:
// if array1 is empty -> return array2
// if array2 is empty -> return array1

// prepare mergedArr []

// loop over each input array using while loop with two pointer: i and j
// i = 1
// j = 1
// initialize array1Item = 0, array2Item = 0
// the condition is array1item exists or array2item exists
// compare array1 to array2:
// if(array2Item === undefined || array1Item < array2Item) push array1Item to mergedArr and array1Item = array1[i]
// if else, push array2Item to mergedArr and array2Item = array1[j]

// return mergedArr

// array1item: 0 -> 3 -> 4 -> 31
// array2item: 4 -> 6 -> 30 -> undefined
// mergedArr: [0, 3, 4, 4, 6, 30, 31]

// array1item: 0 -> 3 -> 4 -> 31 -> undefined
// array2item: 4 -> 6 -> 30 -> 48
// mergedArr: [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(array1, array2) {
  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  const mergedArr = [];

  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArr.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArr.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArr;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
