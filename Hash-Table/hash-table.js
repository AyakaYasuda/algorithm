let user = {
  age: 54,
  name: 'Kyle',
  magic: true,
  scream: function () {
    console.log('ahhhhhh!');
  },
};

// look up --> O(1)
user.age;
user.scream();

// insert --> O(1)
user.spell = 'abra kadabra';

// delete --> O(1)
// search --> O(1)

/*
collision
- data could be stored in the same memory as another data
- then you need to go through all potential data to look up data

O(n/k)
*/

const map = new Map();
// a map can contain any data type as the key, whereas an object contains only string as the key
// a map determine the order

const set = new Set();

// exercise
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    // implying private
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // really fast -> O(1)

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  } // O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  } // O(1) or O(n) if there's collision

  keys() {
    const keysArray = [];

    for(let i = 0; i < this.data.length; i++) {
        if(this.data[i]) {
            keysArray.push(this.data[i][0][0])
        }
    }

    return keysArray
  }

//   keys() {
//     if (!this.data.length) {
//       return undefined
//     }
//     let result = []
//     // loop through all the elements
//     for (let i = 0; i < this.data.length; i++) {
//         // if it's not an empty memory cell
//         if (this.data[i] && this.data[i].length) {
//           // but also loop through all the potential collisions
//           if (this.data.length > 1) {
//             for (let j = 0; j < this.data[i].length; j++) {
//               result.push(this.data[i][j][0])
//             }
//           } else {
//             result.push(this.data[i][0])
//           } 
//         }
//     }
//     return result; 
//   }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.set('apples', 54));
console.log(myHashTable.set('oranges', 30));
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys())