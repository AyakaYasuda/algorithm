// reference type - we are creating addresses to where the data is stored
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2;
object1 !== object3;

// context vs scope
const object4 = {
  a: function () {
    console.log(this); // this points at object4
  },
};

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, my name is ${this.name} and I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`I'm ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
