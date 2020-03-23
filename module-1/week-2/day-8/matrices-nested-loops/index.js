const maPremiereMatrice = [
  [1, 23, 444, -2, 1234], // level 1 - 0
  //=> 0, 1,  2,   3,   4
  [true, false, true, false, false, true, false], // level 1 - 1
  //=> 0,   1,     2,     3,    4,    5
  ["a", "b", "c", "d", "e", "f", "g", "h"], // level 1 - 2
  //=> 0,  1,   2,   3,   4,    5,   6,   7
  [null, NaN, false, undefined, 0, ""], // level 1 - 3
  //=> 0,  1,     2,      3,      4,  5
  [
    // level 1 - 4
    { id: 1, name: "john", lastname: "doe", age: 30 }, // 0
    { id: 2, name: "fatoumata", lastname: "diakite", age: 19 }, // 1
    { id: 3, name: "jim", lastname: "owen", age: 32 }, // 2
    { id: 4, name: "marcel", lastname: "dupont", age: 55 }, // 3
    { id: 5, name: "chen", lastname: "xin", age: 33 }, // 4
    { id: 6, name: "hans", lastname: "zimmer", age: 20 }, // 5
    { id: 6, name: "billie", lastname: "jean", age: 23 } // 6
  ]
];

// 0 accéder directement aux valeurs
console.log("-------------- 0 ----------------");

// afficher la première case du premier tableau imbriqué
console.log(">>>", maPremiereMatrice[0][0]);
// afficher la seconde case du troisième tableau
console.log(">>>", maPremiereMatrice[2][2]);
// afficher la case valant chaîne vide
console.log(">>>", maPremiereMatrice[3][5]);
// afficher la dernière case du tableau de booléens
console.log(">>>", maPremiereMatrice[1][maPremiereMatrice[1].length - 1]);
// afficher l'id de l'utilisateur nommé chen
console.log(">>> chen a l'id :", maPremiereMatrice[4][4].id);
// afficher le nom de famille de l'utilisateur prénommé marcel
console.log(">>> ndf de marcel :", maPremiereMatrice[4][3].lastname);
// afficher l'age nom de famille de l'utilisateur prénommé marcel
console.log(">>> ndf de marcel :", maPremiereMatrice[4][3].lastname);
// afficher l'age du dernier user contenu dans le dernier tableau
console.log(
  ">>> age du dernier user :",
  maPremiereMatrice[4][maPremiereMatrice[4].length - 1].age
);

// 1 utiliser for pour afficher le contenu du premier niveau de maPremierMatrice
console.log("-------------- 1 ----------------");

for (let i = 0; i < maPremiereMatrice.length; i++) {
  console.log(maPremiereMatrice[i]);
}

// 2 utiliser for pour afficher chaque valeur contenue dans maPremierMatrice[0]
console.log("-------------- 2 ----------------");

for (let i = 0; i < maPremiereMatrice[0].length; i++) {
  console.log(maPremiereMatrice[0][i]);
}

// 3 utiliser deux boucles for pour afficher toutes les valeurs de maPremierMatrice

console.log("-------------- 3 ----------------");

for (let i = 0; i < maPremiereMatrice.length; i++) {
  console.log(`---- valeur de i: ${i} ----`);

  for (let j = 0; j < maPremiereMatrice[i].length; j++) {
    console.log(`##### valeur de j: ${j} #####`);
    console.log(maPremiereMatrice[i][j]);
  }

  console.log("****** on passe à l'incémentation de i ******");
}


console.log("---- fin de semaine !!!! ----");
