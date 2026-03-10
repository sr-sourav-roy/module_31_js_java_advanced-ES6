// Introduction to Class and objects:
// 👉class container{

// }

class container {
  constructor(name, brand, price, color) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.color = color;
  }
  // if you work function:
  newName() {
    console.log(`wow! how much..🤔 ${this.price}`);
  }
}

const tShirt = new container("Polo", "easy", "1k", "black");
// console.log(tShirt);
// tShirt.newName();

const samsung = new container("samsung", "sm", "50k", "black");
// console.log(samsung);
// samsung.newName();
