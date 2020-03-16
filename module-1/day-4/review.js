var monNumber1 = 12;
var monNumber2 = 12 + 12;
var monNumber3 = 10e2;

var maString1 = "hello";
var maString2 = "world";
var maString3 = `le contenu de la variable number est : ${monNumber1}`; //: template literal
var maString4 = "le contenu de la variable number est : ${number}";
var maString5 = "le contenu de la variable number est : " + monNumber1;

var monBooleen1 = true || false;
var monBooleen2 = false && true;
var monBooleen3 = 23 >= 23;
var monBooleen4 = "chats".length === "chien".length;

var monNull = null;

var maVarNonDefinie = undefined;

// un objet litéral, c'est une collection de clé/valeur, qui représente soit un objet du monde réel, ou un abstrait...
// C'est juste pour nous rendre service, c'est simple à manipuler.

var sneakers1 = {
  marque: "Nike",
  model: "Jordan 4",
  prix: 90,
  couleur: "noir et rouge",
  taille: 45,
  disponibilite: 2,
  estPopulaire: true
};

var sneakers2 = {
  marque: "Adidas",
  model: "Superstar",
  prix: 70,
  couleur: "noir et blanche",
  taille: 39,
  disponibilite: null,
  estPopulaire: false
};

var simplonienne = {
  age: 29,
  pointure: 39,
  estSympa1: "oui est sympa",
  estSympa: true,
  prenom: "Dalila"
};

if (simplonienne.estSympa1 === "oui est sympa") {
    
}

if (simplonienne.estSympa) {
    
}

console.log('"choux-fleur" * 10');
console.log("choux-fleur" * 10);

var quizzAgeDalila = simplonienne.age + 1;
console.log(quizzAgeDalila);

/**
 * 
 */

// var sneakers2Marque = "Adidas";
// var sneakers2Model = "Superstar";
// var sneakers2Prix = 70;
// var sneakers2Couleur = "noir et blanche";
// var sneakers2Taille = 39;
// var sneakers2Marque = "Adidas";

if (sneakers1.estPopulaire) {
  console.log("cette basket a du succès !!!");
}

// TRUTHY / FALSY

/*
 * les valeurs falsy (non-fiables) sont =>
 * false "" null undefined 0 NaN
 * toutes les autres valeurs sont considérées comme truthy
 */

console.log("-------------------------");
if ("une valeur truthy")
  console.log("on passera dans ce if si la valeur testée est truthy ...");
else console.log("car la valeur testée dans le if est falsy");
console.log("-------------------------");

var x = Boolean("NaN");
console.log("------> TRUTHY OU FALSY ????");
console.log(x);
console.log("****************************");

// if (true) {
// if (220 > 150) {
if (sneakers1.prix > 150) {
  console.log("c'est pas donné pour une paire de shoes");
} else {
  console.log("ça va, c'est pas trop cher pour une paire de shoes");
}

var coordGPS = { lat: 25.666, lng: 445.55 };

var cat = {
  nom: "Felix",
  age: 6,
  couleur: "noir",
  yeux: "vert",
  enfant: {
    nom: "Pipo",
    age: 1,
    couleur: "noir",
    yeux: "bleu",
    enfant: null
  }
};

console.log("^^^^^^^^^^^^^^^");
console.log(`l'enfant du chat à les yeux de couleur ${cat.enfant.yeux}`);
console.log(`l'enfant du chat à les yeux de couleur cat.enfant.yeux`);
console.log(cat.enfant.yeux);
console.log("^^^^^^^^^^^^^^^");
console.log("hello Abdalaye, bienvue sur votre page d'accueil");

console.log("un an plus tard....");
cat.age += 1;
console.log(cat.age);

// console.log("le chat " + cat.nom + " est de couleur " + cat.couleur + " et son enfant se nomme " + cat.enfant.nom);

// console.log(`le chat ${cat.nom} est de couleur ${cat.couleur} et son enfant se nomme ${cat.enfant.nom}`);

// console.log(`la valeur de monNumber3 est : ${monNumber3}`);

// console.log(sneakers1, sneakers2, coordGPS);

var toto = "string";
console.log("------------>", toto);
console.log(toto); // titi ! pas toto !!!

var a,
  b,
  c = "player c",
  d;
console.log(a, b, c, d);

c = "player disconnected";

console.log(c);

// CONSTANTES

const y = "cette valeur est affectée à x, et ne pourra pas changer ...";
console.log(y);

// y = "une nouvelle valeur..."; // lance un TypeError => on ne pas réassigner une constante

const computer1 = {
  marque: "apple",
  version: "Mojave",
  couleur: "gris"
};

const computer2 = {
  marque: "Dell",
  version: "windows 10",
  couleur: "rouge"
};

console.log(computer1);

computer1.tailleEcran = "15 pouces";
computer1.prix = 1500;

console.log(computer1);
console.log(computer2);

// try {
//   // la réaffectation à une constante ne fonctionnera jamais ... TypeError
//   computer1 = {
//     marque: "dell",
//     version: "windows 10",
//     couleur: "noir"
//   };
// } catch (err) {
//   console.log(err);
// }

const phone1 = { marque: "Huaweï", modele: "Super Phone", prix: 180 };

if (phone1.prix < 200) {
  console.log("dans le if du test phone.prix....");
  let messagePromotionel = `Baisse de prix sur le ${phone1.modele}`;
  console.log(messagePromotionel);
  // ........ le temps passe....
  messagePromotionel = "La promo est finie...";
  console.log(messagePromotionel);
}

// console.log(messagePromotionel)

console.log("coucou, fin de programme");
