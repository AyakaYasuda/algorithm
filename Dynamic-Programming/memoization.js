// What's caching?
// - Caching is a way to store values so we can use them later on

// What's memoization?
// - Memoization is a specific form of caching that involves caching return value of the function based on its parameters so we don't have to calculate again

function addTo80(n) {
  console.log('What if this function takes so long?');
  return n + 80;
}

let cache = {};
function memoizedAddTo80(n) {
  if (cache.n) {
    return cache.n;
  } else {
    console.log('takes long time!');
    cache.n = n + 80;
    return cache.n;
  }
}
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));

function memoizedAddTo80WithClosure() {
  let cache = {};

  return function (n) {
    if (cache[n]) {
      return cache[n];
    } else {
      console.log('takes long time!');
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoize = memoizedAddTo80WithClosure();
console.log(memoize(5));
console.log(memoize(5));
