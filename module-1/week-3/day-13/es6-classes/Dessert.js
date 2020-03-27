// en progammation orientée objet (POO) (object oriented programming - OOP)
// il y 'a le concept d'héritage
/// des classes enfants, vont hériter des propriétés et méthodes d'une classe parente
// tout en guardant la possibiliét d'ajouter de nouvelles propriétés et et méthodes qui n'appartiennent qu'à la classe enfant
// il également possible de modifier le comportement d'une méthode héritée (polymorphisme)

class Dessert {
  constructor(name, ingredients) {
    this.name = name; // on appelle cette phase l'hydratation
    this.ingredients = ingredients; // en fait c'est un mot compliqué pour dire affecte dasn valeur au this construit à ce moment précis...
  }

  displayIngredients() {
    console.log(`---- ${this.name} ----`);
    this.ingredients.forEach(ingredient => console.log(ingredient));
    console.log("----------------------");
  }
}

// sucre syntaxique ...
class Cake extends Dessert {
  constructor(name, ingredients, baking) {
    super(name, ingredients); // pointe vers le constructeur de la classe parente
    this.baking = baking;
  }

  displayBakingTime() {
    console.log(`${this.name} needs ${this.baking} of baking`);
  }
}


const mousse = new Dessert("mousse au chocolat", [
  "sucre",
  "chocolat",
  "oeufs",
  "sel"
]);

const gateau = new Cake(
  "gateau au chocolat",
  ["sucre", "chocolat", "farine", "beurre", "oeufs", "levure chimique"],
  "40min"
);

const fondant = new Cake(
  "fondant au chocolat",
  ["sucre", "chocolat", "farine", "beurre", "oeufs", "sucre vanillé"],
  "18min"
);

console.log(mousse);
console.log(mousse.displayBakingTime); // undefined ! car seulement défini sur la classe enfant (Cake)
console.log(gateau);
console.log(fondant);

mousse.displayIngredients();
fondant.displayIngredients();
gateau.displayIngredients();

console.log(fondant.displayBakingTime());
