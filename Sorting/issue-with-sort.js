const basket = [2, 7, 33, 56, 78, 3, 14, 43];

// not sorted
console.log(basket.sort());

// sorted correctly
console.log(
  basket.sort(function (a, b) {
    return a - b;
  })
);
