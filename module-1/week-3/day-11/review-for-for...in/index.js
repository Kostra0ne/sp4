const users = [
  { name: "bill", lastname: "bar", id: 10, age: 20, email: "foo@bar.com" },
  { name: "jane", lastname: "doe", id: 30, age: 40, email: "jane@doe.io" },
  {
    name: "jim",
    lastname: "foo",
    id: 100,
    age: 30,
    email: "jimmy@foo.org",
    isAdmin: true
  }
];

const products = [
  {
    id: 1,
    name: "Sony Bravia",
    price: 500,
    stock: 20,
    rate: 3.5,
    category: "multimedia"
  },
  {
    id: 2,
    name: "skateboard element full",
    price: 180,
    stock: 3,
    rate: 5,
    category: "sport"
  },
  {
    id: 3,
    name: "Samsung S7",
    price: 600,
    stock: 10,
    rate: 4,
    category: "multimedia"
  },
  {
    id: 4,
    name: "Baby radio",
    price: 20,
    stock: 100,
    rate: 5,
    category: "babies"
  }
];

const orders = [
  { id: 1, userID: 10, productID: 1234, quantity: 2, date: "19/02/2019" },
  { id: 2, userID: 10, productID: 1, quantity: 1, date: "01/01/2020" },
  { id: 3, userID: 30, productID: 2, quantity: 1, date: "25/03/2020" }
];

// utiliser for + for...in pour afficher toutes les clés/valeurs des users

// afficher clé : valeur de la clé
console.log("***************************");
console.log("***       I users       ***");
console.log("***************************");

console.log("------ 1 for...in -------");

var index = 0;

for (let key in users[index]) {
  console.log(`${key} : ${users[index][key]}`);
}

console.log("------ 2 for -------");

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

console.log("------ 3 combine for + for...in -------");

for (let i = 0; i < users.length; i++) {
  for (let prop in users[i]) {
    if (prop === "isAdmin") {
      console.log("cet user est admin");
    }
    console.log(`${prop} : ${users[i][prop]}`);
  }
  console.log("--------");
}

console.log("***************************");
console.log("****  II  products ********");
console.log("***************************");

console.log("------ 1 for...in -------");

for (let prop in products[2]) {
  console.log(`${prop} : ${products[2][prop]}`);
}

console.log("------ 2 for -------");

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

console.log("------ 3 combine for + for...in -------");

for (let i = 0; i < products.length; i++) {
  for (let prop in products[i]) {
    console.log(`${prop} : ${products[i][prop]}`);
  }
  console.log("------");
}
