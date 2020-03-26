// CETTE SERIE DE FONCTIONS EST LIEE AU PROTOTYPE d'ARRAY
// cad que n'importe que array "connait" ces fonctions
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array

// rappel callback

// function a(clbk) {
//   return clbk();
// }

// function b() {
//   return "je suis b";
// }

// var x = a(b); // je suis b
// console.log(x);

const numbers = [1, 2, 3, 4, 444, 1200];
const letters = ["a", "b", "c", "...", "z"];
const booleans = [true, false, true, true, false];
const products = [
  { id: 123, name: "Apple", price: 0.7 },
  { id: 444, name: "Peach", price: 1 },
  { id: 1, name: "Pear", price: 1.2 }
];

console.log("-------- forEach ---------");

const afficherValeurs = (val, i, arr) => {
  console.log(val);
};

function afficherValeurs2(x) {
  console.log(x);
}

console.log("--------A----------");
const resForEach1 = numbers.forEach(afficherValeurs);

console.log("--------B----------");
const resForEach2 = letters.forEach(afficherValeurs2);

console.log("--------C----------");

const resForEach3 = ["foo", "bar", "baz"].forEach(function(v, i, arr) {
  console.log(v, i, arr);
});

console.log("valeurs de retour de forEach...");
console.log(resForEach1, resForEach2, resForEach3);

console.log("-------- map ---------");

function multPar2(v) {
  return v * 2;
}

const multPar4 = v => v * 4; // return v * 4

const valeursModifiees1 = numbers.map(multPar2);
const valeursModifiees2 = numbers.map(multPar4);

console.log("valeurs de retour de map...");
console.log(valeursModifiees1, valeursModifiees2);
console.log(
  "attention, map retourne un nouveau tableau, le tableau original est laissé intact... "
);

console.log(valeursModifiees1 === numbers, valeursModifiees2 === numbers);

console.log("-------- filter ---------");

const numbersPlusGrandsQue2 = numbers.filter(function(nbr) {
  // filter DOIT retourner true ou false !
  // les valeurs qui passe le test avec la valeur true, seront retournée au final dans le nouveau tableau qui lui meêm est retourné par filter...
  return nbr > 2; // on retourne une expression booléenne
  // expression en JS c'est tout instruction qui se résoud en 1 valeur... ici true || false
});

console.log("valeurs de retour de filter...");
console.log(numbersPlusGrandsQue2);

console.log("-------- reduce ---------");
// le couteau suisse des HOF... on peut solutioner des problèmes très différents... bcp de cas pratiques possibles
// reduce part d'un tableau, le parcoure en entier et utilise un accumulateur (une valeur) pour retourner au final, une valeur unique.... cette valeur peut être de n'importe quel type... en fonction de la tâche que l'on souhaite accomplir.
// donc reduce peut retourne un nombre, booléen, objet, array, null, undefined....

const sum = (accumulateur, v) => {
  // console.log(acc, " | ", v);
  return accumulateur + v;
};

const concatLettres = (acc, lettre) => {
  return acc + lettre;
};

const testSiValeurTrue = (a, v) => a && v;

const resultSum1 = numbers.reduce(sum, 0);

const resultConcatLettres = letters.reduce(concatLettres);

const contientUniquementTrue = booleans.reduce(testSiValeurTrue, true);

console.log("result reduce numbers =>", resultSum1);
console.log("result reduce booleans =>", contientUniquementTrue);
console.log("result reduce letters =>", resultConcatLettres);

console.log("-------- sort ---------");
// sort ne retourne pas un nouveau tableau ... il trie le tableau initial

booleans.sort();
console.log(booleans);

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);

numbers.sort(function(a, b) {
  return b - a;
});

console.log(numbers);

console.log(products);

// trier le tableau par ordre d'id ascendant
products.sort(function(prod1, prod2) {
  return prod1.id - prod2.id;
});

console.log(products);

// trier le tableau par prix descendant
products.sort((prod1, prod2) => prod2.price - prod1.price);

console.log(products);

console.log("-------- combinaison time !!! ---------");

// trier le tableau de nombres en mode ASC, DESC
// puis reduire à une multiplication : les deux resultats seront différents car
// l'ordre des nbres importe pour les multiplication( !== addition)

// sort numbers ASC

const diviser = (a, v) => a / v;

const resCombine1 = numbers.sort((a, b) => a - b).reduce(diviser);
const resCombine2 = numbers.sort((a, b) => b - a).reduce(diviser);

console.log(resCombine1, resCombine2);

console.log("-------- D.I.Y !!! ---------");

const simploniens = [
  { name: "Adlane", favColor: "blue" },
  { name: "Gaelle", favColor: "blue" },
  { name: "Kenwele", favColor: "green" },
  { name: "Hamidou", favColor: "purple" }
];

// utiliser forEach pour parcourir tous les simploniens
// utiliser filter pour ne garder que les simploniens préférant le bleu
// utiliser map pour passer les noms de simploniens en CAPITALES
// Utiliser map + sort pour trier les simploniens par nom ASC
// utiliser reduce pour connaitre la comme les lettres contenues dans chaque nom