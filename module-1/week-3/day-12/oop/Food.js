class Food {
  constructor(name) {
    this.name = name;
  }
}

class Cake extends Food {
  constructor(name, sugar) {
    super(name);
    this.sugar = sugar;
  }
}

const steak = new Food("steak");
const cake = new Cake("muffin", "100g");
const fondant = new Cake("fondant au chocolat", "80g");

console.log(steak);
console.log(cake);
console.log(fondant);

