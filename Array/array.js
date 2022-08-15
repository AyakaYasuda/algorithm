const strings = ['a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

//lookup --> O(1)
strings[2];

//push --> O(1)
strings.push('e');

//pop --> O(1)
strings.pop();
strings.pop();

//insert --> O(n)
strings.unshift('x');

//insert or delete --> O(n)
strings.splice(2, 0, 'alien');

console.log(strings);

// How to build an array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[index] = this.data[index + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
// newArray.pop();
newArray.delete(1);
console.log(newArray);
