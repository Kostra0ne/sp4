const products = [
  { id: 1, name: "smart phone", price: 400, stock: 40 },
  { id: 2, name: "smart watch", price: 300, stock: 100 },
  { id: 3, name: "smart frigo", price: 650, stock: 10 },
  { id: 4, name: "smart home", price: 1000000, stock: 1 },
  { id: 5, name: "tablet Samsung", price: 420, stock: 1000 },
  { id: 6, name: "iphone", price: 1000, stock: 40 },
  { id: 7, name: "ipad", price: 500, stock: 30 }
];

// jusque là on utilisait la boucle for pour parcourir les arrays
// mais il existe en JS, une autre voie, davantage orientée programmation fonctionelle...
// avec la boucle forEach !!!

console.log("------------ 1 avec for --------------");

for (let index = 0; index < products.length; index++) {
  console.log(products[index]);
}

// on commence par accéder au tableau que l'on souhaite parcourir
// products
// et on y attache la fonction forEeach ...
// products.forEach()
// forEach est une Higher Order Function (HOF), cad une fonction qui prend un callback (une fonction) en argument...
// products.forEach(function() {

// });
// le callback de forEach attend un argument obligatoire et 2 arguments optionnels
// l'argument obligatoire représente, tour à tour, chacune des valeurs contenues dans l'array !!!

console.log("------------ 2 avec forEach --------------");

products.forEach(function(product, i) {
  console.log(i, "=>", product);
});

// il est même possible de simplifier cette syntaxe à l'extrême avec les fonction fléchée (fat arrow functions)

const maPremiereFonctionFlechee = () => {
  return "foo";
};

// si une fonction fléchée retourne directement une valeur,
// on peut même ne pas utiliser le mot-clé return

const sum = (a, b) => a + b;

console.log("------------ 3 avec forEach compacte --------------");

products.forEach((product, i) => console.log(i, "=>", product));

const afficheProduitsPairs = (p, i) => {
  if (i % 2 === 0) console.log(p);
};

const afficheProduitsImpairs = (p, i) => {
  if (i % 2 === 1) console.log(p);
};

// on peut tout à fait externaliser le callback, cad le déclarer en dehors du forEach ... c'est le début de votre route vers la composition de fonctions
// ... des petites fonctions unitaires, simples à deboguer car courtes et très spécifiques !!!
console.log("------------ 4 composition time ! --------------");
products.forEach(afficheProduitsPairs);
products.forEach(afficheProduitsImpairs);