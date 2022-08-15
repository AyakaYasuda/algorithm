const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(arr) {
  for (let i = 0; i < arr.length; i++) { 
    for (let j = 0; j < arr.length; j++) { 
      console.log(arr[i], arr[j]);
    }
  }
}

logAllPairsOfArray(boxes);

// O(n) * O(n)
// O(n^2) ==> Quadratic Time