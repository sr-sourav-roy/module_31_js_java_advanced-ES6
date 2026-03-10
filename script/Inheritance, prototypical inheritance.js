// 👇Inheritance, prototypical inheritance:
class mainContainer {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  structure() {
    console.log("This main system!");
  }
}

// 👇step-1
class phone extends mainContainer {
  constructor(name, price, brand, size) {
    super(name, price);
    this.brand = brand;
    this.size = size;
  }
  phCustom() {
    console.log(`okky print by ${this.brand}`);
  }
}
const spRoy = new phone("readmi", "15k", "xaimoi");
// console.log(spRoy);
// spRoy.structure();
// spRoy.phCustom();

// 👇step-3:
class names extends phone {
  constructor(name, price, size, hight) {
    super(name, price, size);
    this.hight = hight;
  }
  manCon() {
    console.log(`this is note a value ${this.brand}`);
  }
}
const newNameOky = new names("sourav", "5k", "5ft", "5.j");
console.log(newNameOky);
newNameOky.manCon();
