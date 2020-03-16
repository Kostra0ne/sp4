function direBonjour() {
  return "Bonjour !!!";
}

function direAuRevoir() {
  return "Au revoir !!!";
}

function direFoo() {
  return "foo";
}

// la fonction multiplier accepte 2 paramètres (arguments)
function multiplier1(nb1, nb2) {
  // scope (corps) de la function multiplier
  if (isNaN(nb1) || isNaN(nb2)) {
    return "désolé mais j'ai besoin de 2 nombres pour faire une multiplication";
  } else {
    return nb1 * nb2;
  }
}

function multiplier3(x, y) {
  const res = x * y;
  // en dessous, utilisation de l'opérateur ternaire... en fait c'est un if/else super condensé
  return isNaN(res)
    ? "désolé mais j'ai besoin de 2 nombres pour faire une multiplication"
    : res;
}

var msg, resultCalcul;
// msg = direBonjour();
// console.log(msg);

// msg = direAuRevoir();
// console.log(msg);

// msg = direFoo();
// console.log(msg);
// console.log(msg);

// msg = "Accrochez vous ça vaut le coup !!!";
// console.log(msg);

// msg = 42;
// console.log(msg);

console.log("---- MULTIPLICATION ------");

resultCalcul = multiplier3(1020202002, 23.44);
console.log("resultCalcul 1 ---->", resultCalcul);

resultCalcul = multiplier3(1000, 203.744);
console.log("resultCalcul 2 ---->", resultCalcul);

resultCalcul = multiplier3("gui", "chose");
console.log("resultCalcul 3 ---->", resultCalcul);

resultCalcul = multiplier3("truc", 25);
console.log("resultCalcul 3 ---->", resultCalcul);

console.log("----------");

// function quelEstLeMotLePlusLong(mot1, mot2) {
//   if (mot1.length > mot2.length) return "le mot le plus long est " + mot1;
//   else return "le mot le plus long est " + mot2;
// }

// function quelEstLeMotLePlusLong(mot1, mot2) {
//   var result = "le mot le plus long est ";
//   return result + (mot1.length > mot2.length ? mot1 : mot2);
// }

function quelEstLeMotLePlusLong(mot1, mot2) {
  var result = "le mot le plus long est ";
  if (mot1.length > mot2.length) {
    return result + mot1;
  } else {
    return result + mot2;
  }
}

function neSertArien() {
  return 42;
}

console.log(quelEstLeMotLePlusLong("foo", "abracadabra"));
console.log(quelEstLeMotLePlusLong("foo", "z"));
console.log(quelEstLeMotLePlusLong("guillaume", "jim"));

// console.log(neSertArien());
// console.log(neSertArien());
// console.log(neSertArien());
// console.log(neSertArien());
// console.log(neSertArien());

var resultat = soustraire(300, 202);
console.log("resultat soustraction");
console.log(resultat);

function bonAppetit(qui) {
  return "Bon appétit " + qui;
}

console.log(bonAppetit("Tout le monde !!!"));

var bonAppAQui = bonAppetit("Silvia");

console.log(bonAppAQui);

bonAppAQui = bonAppetit("Hakim");

console.log(bonAppAQui);

// 1 comment récupérer le code de guillaume ?
// étape 1 : cloner le repo UNE FOIS POUR TOUTE ;D
// $ git clone https://github.com/Kostra0ne/sp4
// étape 2 : quand guillaume met à jour son code, vous pouvez récupérer la nouvelle version :
// $ git pull origin master
// warning 1 : pour pull, il faut vous situer dans le terminal, dans le bon dossier (sp4)
// warning 2 : si vous modifiez le code de guillaume, vous ne pourrez plus pull (et serez obligé de cloner de nouveau ...)

// 2 install de nodemon (sudo uniquement sous mac)
// $ [ sudo ] npm install -g nodemon
// une fois ok, vous pouvez exécuter tout fichier JS directement dans un terminal
// $ nodemon nom-fichier.js

var resultType;
var obj = {};

console.log("typeof obj");
console.log(typeof obj);

function donneMoiLeType(valeur) {
  return typeof valeur;
}

resultType = donneMoiLeType(true);
console.log("a => ", resultType);

resultType = donneMoiLeType(false);
console.log("b => ", resultType);

resultType = donneMoiLeType("abcde");
console.log("c => ", resultType);

resultType = donneMoiLeType({ prenom: "Kenwele" });
console.log("d => ", resultType);

resultType = donneMoiLeType(12345);
console.log("e => ", resultType);

/**
 *  Combiner des fonctions !!!
 */

function multiplier(nb1, nb2) {
  const res = nb1 * nb2;
  // scope (corps) de la function multiplier
  if (isNaN(res)) {
    return "désolé mais j'ai besoin de 2 nombres pour faire une multiplication";
  } else {
    return res;
  }
}

/**
 * @author Latifa
 * @description Cette fonction retourne la soustraction de 2 nombres
 * @param nb1 Un nombre
 * @param nb2 Un autre nombre
 * @throws Lance une erreur de type TypeError si un des param n'est pas un nombre
 */
function soustraire(nb1, nb2) {
  var result = nb1 - nb2;
  if (isNaN(result))
    throw new TypeError("Désolé, nb1 et nb2 doivent être de type nombre !");
  return result;
}

var monResCombine = soustraire(multiplier(10, 2), multiplier(30, 0.5));
//                  soustraire       20             15     ===>    5
console.log("res combiné 1 => ", monResCombine);

monResCombine = soustraire(multiplier(30, 0.5), multiplier(10, 2));
console.log("res combiné 2 => ", monResCombine);

monResCombine = multiplier(soustraire(10, 5), soustraire(10, 3));
//                  multiplier       5         *    90     ===>    5
console.log("res combiné 3 => ", monResCombine);

var superMario = {
  life: 100
};

console.log("super mario a " + superMario.life + " points de vie");

superMario.life = soustraire(superMario.life, 10);

console.log("super mario a " + superMario.life + " points de vie");
