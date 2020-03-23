console.log("-------------- 0 - Intro ----------------");
const monPremierArraySyntaxeLongue = new Array();
const monPremierArray = [];
// les arrays sont des structures séquencielles ... des séquences de valeurs
console.log(typeof monPremierArray, typeof monPremierArraySyntaxeLongue);
console.log(monPremierArraySyntaxeLongue, monPremierArray);
console.log(monPremierArraySyntaxeLongue.length, monPremierArray.length);
const monArray = [12, 33, 4566, -9000, 13];
console.log("mon array peut contenir des valeurs =>", monArray);
console.log(monArray.length);
// avec push, on peut ajouter des valeurs en fin de tableau
monArray.push(10000);
monArray.push(-50000);
monArray.push(2 * 2);
console.log("mon array a été mis à jour =>", monArray);
console.log(monArray.length);
// avec unshift on peut également pousser des valeur en début de tableau...
monArray.unshift(333);
monArray.unshift(444);
console.log("mon array a été mis à jour =>", monArray);

console.log("-------------- 1 - Accéder aux indices ----------------");

// les arrays sont sequentiels ET indexés ...
// ce que ça veut dire que chaque case du tableau possède un numéro (un index, ou indice)
// cet index représente la position de la valeur dans ledit array

console.log(
  "l'index de la première case de tout array, est TOUJOURS 0 => ",
  monArray[0]
);
console.log(monArray[1]);
console.log(monArray[2]);
console.log(monArray[3]);
// pour accéder à la valeur contenue dans la dernière case d'un array,
// on utilise sa longueur (length)
// du coup l'indice de la dernière case (cellule) est toujours égala à > longueur de array  - 1
console.log(
  "la valeur contenue dans la dernière case est => ",
  monArray[monArray.length - 1]
);

console.log(
  "-------------- 2 - resultats après série de push ----------------"
);

// review
const arraySimple = ["a", "b", "c", "d", "e"];
//        indices =>  0    1    2    3    4
// quelle longueur ? 5
// indice de la première case ? 0
// indice de la dernière case ? 4
// donc longueur - 1 === 4
// cad => le dernier indice sera TOUJOURS égal a longueur de l'array - 1
// et ce même si la longueur de l'array varie dans le temps ...

function recupereDerniereValeurTableau(array) {
  return array[array.length - 1];
}

console.log("test 1 => ", recupereDerniereValeurTableau(arraySimple));

arraySimple.push("f");

console.log("test 2 => ", recupereDerniereValeurTableau(arraySimple));

arraySimple.push("g");
arraySimple.push("h");
arraySimple.push("i");
arraySimple.push("j");

console.log("test 3 => ", recupereDerniereValeurTableau(arraySimple));

console.log("-------------- 3 ----------------");

/*
// petit détour sur les Strings ....
var str = "abcdefghij"; // attention, cette chaîne n'est pas un array
console.log(str[2]); // pourtant on peut accéder aux différents caractères
console.log(str[str.length - 1]); // grâce aux index de la chaîne...
*/

// const user1 = {
//   prenom: "Bill",
//   nom: "Bascora",
//   age: 37
// };

// const user2 = {
//   prenom: "Will",
//   nom: "Smith",
//   age: 51
// };

// const users = [user1, user2]; // les arrays peuvent contenir n'importe quel type de valeur !

const users = [
  // indice 0
  {
    prenom: "Bill",
    nom: "Bascora",
    age: 37
  },
  // indice 1
  {
    prenom: "Will",
    nom: "Smith",
    age: 51
  }
]; // longueur => 2

// comment accéder au nom de l'user 2 en passant par l'array ???

console.log("le nom du second user est bien : " + users[1].nom);

users.push({
  nom: "Ghazraoui",
  age: 31,
  prenom: "Adlane"
});

console.log(users);

console.log("le nom du dernier user est bien : " + users[2].nom); // l(3) - 1  => 2

console.log(
  "ou alors accéder comme ça au dernier : " + users[users.length - 1].nom
);
// la ligne ci-dessus ramène toujours le dernier user

console.log([
  "kenwele",
  null,
  3,
  { prix: 12, ref: "GDNS123OS" },
  undefined,
  true || false
]);

// false && false => false
// true && true   => true
// true && false  => false
// false && true  => false

// false || false => false
// true  || true  => true
// true  || false => true
// false || true  => true

/************************************/
/************************************/
/********** array imbriqué **********/
/**********  ( matrice )   **********/
/************************************/

console.log("-------------- 4 tableaux imbriqués ----------------");

const monPremierArrayDArrays = [
  // 0
  [1, 2, 33, 45233, 404034, -3292992], // 0 1 2 3 4 5
  // 1
  [true, false, true, true], // 0 1 2 3
  // 2
  ["hello", "world", "of", "coding", "!!!"], // 0 1 2 3 4
  // 3
  [
    { name: "fridge", price: 150 }, // 0
    { name: "car", price: 10000 }, // 1
    { name: "sneakers", price: 80 }, // 2
    { name: "smartphone", price: 400 } // 3
  ]
];

console.log("nested array >>>>", monPremierArrayDArrays[1][2]);
console.log("nested array >>>>", monPremierArrayDArrays[2][3]);
console.log("nested array >>>>", monPremierArrayDArrays[3][2]);
console.log("nested array >>>>", monPremierArrayDArrays[3][2].price);

console.log(
  "-------------- 4 tableaux imbriqués d'objets (gâteaux) ----------------"
);

const gateaux = [
  [
    { nom: "tarte au chocolat", prix: 10 },
    { nom: "cheesecake", prix: 16 },
    { nom: "brownie", prix: 4 }
  ],
  [
    { nom: "quiche salé", prix: 6 },
    { nom: "quiche au saumon", prix: 5 }
  ]
];

var gateauDuMoment = gateaux[0][2];
console.log(
  "le " + gateaux[0][2].nom + " coûte " + gateaux[0][2].prix + " euros"
);
console.log(
  "le " + gateauDuMoment.nom + " coûte " + gateauDuMoment.prix + " euros"
);
console.log(`le ${gateauDuMoment.nom} coûte ${gateauDuMoment.prix} euros`); // template literal

// for
// forEach
// for ... in

// while
// do... while
/// for... of

/**
 *
 * @param {object} product
 * @throws Lance une erreur si val n'est pas un objet contenant la clé prix
 */
function getProductPrice(product) {
  if (product === undefined || product.price === undefined)
    throw new Error("L'objet fourni n'est pas valide");
  return product.price;
}

try {
  console.log(getProductPrice(monPremierArrayDArrays[3][100]));
} catch (err) {
  console.log(err);
}

console.log("fin de programme");
