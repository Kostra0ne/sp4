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

function multiplier(nb1, nb2) {
  const res = nb1 * nb2;
  // scope (corps) de la function multiplier
  if (isNaN(res)) {
    return "désolé mais j'ai besoin de 2 nombres pour faire une multiplication";
  } else {
    return res;
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

/**
 * @description Cette fonction retourne la soustraction de 2 nombres
 * @param nb1 Un nombre
 * @param nb2 Un autre nombre
 * @throws Lance une erreur de type TypeError si un des param n'est pas un nombre
 */
function soustraire(nb1, nb2) {
  var result = nb1 - nb2;
  if (isNaN(result)) throw new TypeError("Désolé, nb1 et nb2 doivent être de type nombre !");
  return result;
}

var resultat = soustraire(300, 202);
console.log("resultat soustraction");
console.log(resultat);


function bonAppetit(qui) {
    return "Bon appétit " + qui;
}

console.log(bonAppetit("Tout le monde !!!"));