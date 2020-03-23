// -------------

// boucles...

// while
// do... while
// for

// *******

console.log("************* 1 WHILE *******************");

var count = 0;
var str = "";
/*

while (condition) { // tant que la condition entre parenthèse est vraie ...
    // tourne dans la boucle et exécute un bout de logique ...
} // une fois que la condition n'est plus vraie ...
// passe à la suite du programme ...

// ATTENTION AVEC WHILE => TOUJOURS fournir une condition de sortie de boucle

*/

while (count <= 10) {
  console.log(count);
  count++;
  // les deux ligne suivantes ont le même effet que count++
  // count += 1;
  // count = count + 1;
}

while (str.length <= 100) {
  console.log(str);
  str += "hello";
}

var superMario = {
  score: 0,
  life: 100
};

var nombreEnnemis = 0;

console.log("super mario avant la boucle : ", superMario);

while (superMario.life > 0) {
  nombreEnnemis++;
  superMario.life--;
}

console.log("nb ennemis: ", nombreEnnemis);
console.log("super mario après la boucle : ", superMario);

// Do.. while
// mange ta soupe et après tu auras du dessert

console.log("************* 2 DO...WHILE *******************");

var contenuBolDeSoupe = 300;

do {
  console.log("mange ta soupe", contenuBolDeSoupe);
  let qteSoupeMangee = Math.ceil(Math.random() * (50, 100));
  // ligne dessus... génère un nombre aléatoire entre 0 et 100,
  // arrondi à l'entier inférieur
  contenuBolDeSoupe -= qteSoupeMangee;
} while (contenuBolDeSoupe > 0);

console.log("ok c'est cool, voilà ton dessert ;) ");
console.log("--------------");

console.log("************* 3 FOR *******************");

// for ... est fait pour parcourir des séquences (array / string)

const chainesTV = [
  "tf1", // 0
  "m6", // 1
  "france 4", // 2
  "trace tv", // 3
  "mtv", // 4
  "gulli", // 5
  "nrj12", // 6
  "arte", // 7
  "c8", // 8
  "france2", // 9
  "france3", // 10
  "w9", // 11
  "france ô", // 12
  "bfm", // 13
  "2m", // 14
  "ortc", // 15
  "rtbf" // 16
]; // chainesTV.length => 17

// i ==> increment (on utilise de préférence un let ici, pour que i n'existe que dans le cadre (bloc) de la boucle for)

// pour i valant 0 (en début de boucle), et tant que i est inf à 17, incrémente i de 1, à chaque tour de boucle
for (let i = 0; i < chainesTV.length; i += 1) {
  console.log(i, chainesTV[i]); // pq i ? parce i varie de 0 à chaineTV.length - 1
}

// console.log(chainesTV[0]);
// console.log(chainesTV[1]);
// console.log(chainesTV[2]);
// console.log(chainesTV[3]);
// console.log(chainesTV[4]);
// console.log(chainesTV[5]);
// console.log(chainesTV[6]);

console.log("-------Compter de 1 à 100 -------");

// utiliser une boucle for pour afficher TOUS les nombres de 1 à 100 (inclus)

for (let i = 1; i < 101; i += 1) {
  console.log(i);
  console.log("------");
}

// utiliser une boucle for pour afficher TOUS les nombres de 1000 à 0 (inclus)

console.log("-------Compter de 1000 à 0 -------");

for (let i = 1000; i > -1; i -= 1) {
  console.log(i);
}

const unePhrase = "lorem ipsum idelet quovadis trucmuche...";
//  0123456.....                           39
// utiliser une boucle for pour parcourir toutes les lettres d'une phrase

console.log("------- Parcourir toutes les lettres d'une phrase -------");

for (let i = 0; i < unePhrase.length; i++) {
  console.log(unePhrase[i]);
}

console.log(
  "------- Parcourir un tableau d'objets simploniens et afficher le nom de chacun -------"
);

const simploniens = [
  { nom: "Rayan", promo: "p4" }, // 0
  { nom: "Sophia", promo: "p4" }, // 1
  { nom: "Hamidou", promo: "p4" }, // 2
  { nom: "Kenwele", promo: "p4" }, // 3
  { nom: "Saida", promo: "p4" }, // 4
  { nom: "Abdalaye", promo: "p4" }, // 5
  { nom: "Jonathan", promo: "p4" }, // 6
  { nom: "Hawa", promo: "p4" }, // 7
  { nom: "Saida", promo: "p4" } // 8
]; // longueur (9)

// rayanScript
// p4 [] const promo

for (let i = 0; i < simploniens.length; i++) {
  console.log(">>>", simploniens[i].nom);
}

console.log(
  "utiliser for pour afficher la somme des lettres des noms des simploniens"
);

var somme = 0;

for (let i = 0; i < simploniens.length; i++) {
  somme += simploniens[i].nom.length;
}

console.log(
  "la somme des lettres des noms des simploniens contenus dans ce tableau est : " +
    somme
);

const nerds = [
  { prenom: "Hakim", nom: "Bey" },
  { prenom: "Ada", nom: "Lovelace" },
  { prenom: "Brendan", nom: "Eich" },
  { prenom: "Douglas", nom: "Crockford" },
  { prenom: "Stephen", nom: "Hawkins" },
  { prenom: "Marie", nom: "Curie" },
  { prenom: "Edward", nom: "Snowden" },
  { prenom: "Linus", nom: "Torvalds" },
  { prenom: "Thomas", nom: "Anderson" },
  { prenom: "Morris", nom: "Moss" },
  { prenom: "William", nom: "Gibson" },
  { prenom: "Grace", nom: "Hopper" },
  { prenom: "Jaime", nom: "Levy" },
  { prenom: "Coraline Ada", nom: "Ehmke" },
  { prenom: "Lixia", nom: "Zhang" },
  { prenom: "Alan", nom: "Turing" },
  { prenom: "Dennis", nom: "Ritchie" }
];

function gardeLesNerdsAuPrenomCommenceAOuM(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    // if (arr[i].prenom.startsWith("A") || arr[i].prenom.startsWith("M")) {
    //   res.push(arr[i]);
    // }
    if (arr[i].prenom[0] === "A" || arr[i].prenom[0] === "M" ) {
      res.push(arr[i]);
    }
  }
  return res;
}

const nerdsAetM = gardeLesNerdsAuPrenomCommenceAOuM(nerds);

console.log(nerdsAetM);

console.log("fin du programme ...");
