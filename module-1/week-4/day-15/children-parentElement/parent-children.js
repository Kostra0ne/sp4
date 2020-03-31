const body = document.querySelector("body");

// ----------------------------------------------------------
// 1 - DES PARENTS VERS LES ENFANTS ... avec element.children
// ----------------------------------------------------------

// body => main => ul.products => lis[]
var productsList = body.children[2].children[0].children; // <= tous les li.product

// la propriété element.children est TJS une HTMLCollection
// les HTMLCollections n'implémentent pas forEach ...
// il faut donc passer par une étape de conversion en Array pour pouvoir utiliser cette boucle
productsList = Array.from(productsList); // ici c'est chose faite
const productsListSpreadee = [...productsList]; // pareil avec l'opérateur spread

// productsListSpreadee.forEach(prod => console.log(prod));

//  ----------------
// Ci-dessous =>
// Différentes manières de boucler sur notre liste de produits avec forEach ...
// -----------------

// function callback(prod) {
//   console.log(prod);
// }

// const clbk = function(prod) {
//   console.log(prod);
// };

// productsList.forEach(clbk);

// productsList.forEach(function(prod) {
//   console.log(prod);
// });

// ----------------------------------------------------------
// 2 - DES ENFANTS VERS LEURS PARENTS ... avec element.parentElement
// ----------------------------------------------------------
const firstProduct = body.children[2].children[0].children[0];

console.log("firstProduct >>>>", firstProduct);

console.log(
  firstProduct.parentElement.parentElement.parentElement.parentElement
); // remonte à la racine du document

console.log(
  firstProduct.parentElement.parentElement.parentElement.parentElement.localName
); // cad html => dont le localName est html

// la technique fonctionnera avec n'importe profondeur d'arbre....

// var elementCourant = firstProduct;
var elementCourant = document.getElementById("li-cible");
// console.log(elementCourant);

while (elementCourant.localName !== "html") {
  elementCourant = elementCourant.parentElement;
  console.log(elementCourant);
  // attention, avec while, toujours fournir une condition de sortie
  // comme on sait qu'u document html contient une balise racine html, on est sûr ici d'y arriver à un moment
  // .... si le document est bien formé (valide)
}

console.log("fin de boucle ....", elementCourant);
