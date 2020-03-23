// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...in
// la boucle for...in sert à parcourir les objets littéraux

var cat = {
  name: "Billy",
  age: 4,
  color: "gray",
  eyeColor: "yellow",
  race: "Persan",
  specie: "cat"
};

var dog = {
  name: "Wako",
  age: 8,
  color: "gray",
  eyeColor: "blue",
  race: "American Staffordshire",
  specie: "dog"
};

console.log("---------1--------------");

console.log(cat.age); // accès par indexation directe
console.log(dog.race); // accès par indexation directe
console.log(cat["age"]); // accès par indexation indirecte
console.log(dog["eyeColor"]); // accès par indexation indirecte

console.log("-----------2------------");

for (let prop in cat) {
  // dans les boucles for...in on est obligé d'accéder au valeur via indexation indirecte
  // console.log(prop);
  console.log(prop + " : " + cat[prop]);
}

console.log("-----------3------------");

for (let prop in dog) {
  console.log(prop);
  console.log("---------");
  console.log(`${prop} : ${dog[prop]}`);
  if (prop === "age" && dog[prop] >= 10) console.log("c'est un vieux chien");
}

console.log("-----------4------------");

const products = [
  { name: "sneakers", price: 120 }, // 0
  { name: "smart tv", price: 400 }, // 1
  { name: "smart phone", price: 200 }, // 2
  { name: "orange", price: 3 } // 3
];

for (let index = 0; index < products.length; index++) {
  // console.log(index); // représente le numéro de la case courante ...
  // console.log(products[index]); // permet d'accéder à chaque produit contenu dans l'array

  for (let prop in products[index]) {
    // comme chaque produit est un objet
    // je peux parcourir toute ses propriétés avec une boucle for..in
    console.log(`${prop} > la valeur de l'objet est ${products[index][prop]}`);
  }
}

const album = {
  artist: "Cypress Hill",
  title: "Temple of boom",
  year: 1995,
  label: "Ruffhouse - Columbia"
};

console.log("-----------5------------");

for (let prop in album) {
  console.log(`${prop} : ${album[prop]}`);
}
