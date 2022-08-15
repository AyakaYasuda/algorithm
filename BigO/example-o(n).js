const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
const large = new Array(10).fill('nemo');

function findNemo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'nemo') {
      console.log('Found Nemo!');
    }
  }
}

findNemo(large); // O(n) ==> Linear Time
