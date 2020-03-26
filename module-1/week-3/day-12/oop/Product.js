class Product {
  // définition des propriétés de l'instance (l'objet construit)
  constructor(n, p, ref, stk) {
    // ANYTHING YOU NEED :D
    this.name = n;
    this.price = p;
    this.reference = ref;
    this.stock = stk;
    // tous les construct retourne this par défaut...
    // return this; // donc pas besoin de l'écrire ;D
  }

  // après dans le corps de la classe on définit les méthodes de l'instance
  // ces méthodes (fonctions) seront accessibles pour tous les objets construits via cette classe
  getPrice() {
    return this.price;
  }

  setPrice(newPrice) {
    this.price = newPrice;
  }
}

const sneakers = new Product("adidas superstar", 80, "SNKRZ-12345", 10);
const smartphone = new Product("nokia 7+", 300, "NKIA-98765", 100);
const sofa = new Product("sofa ikea FlükenBlück", 450, "SOF-AAVVJS", 100);

console.log(sneakers);
console.log(smartphone);
console.log(sofa);

console.log("prix du sofa", sofa.getPrice());
console.log("prix des superstars", sneakers.getPrice());

sneakers.setPrice(100);
console.log("nouveau prix des superstars", sneakers.getPrice());
