console.log("undefined, avant affectation", accessibleDansToutCeFichier);
// console.log(artiste);

// artiste += " !!!";
// les 2 instructions ci-dessus fait planter le programme: on ne peut pas accéder à une const / let avant initialisation.

var accessibleDansToutCeFichier =
  "je suis dans une var, et donc, je suis hoïstée..."; // accessible dans tout le fichier
const artiste = "Stromae";  // accessible dans tout le fichier
let artiste2 = "Pata du Prince"; // accessible dans tout le fichier
console.log(accessibleDansToutCeFichier);

// un block en JS est défini par {} (attention on ne parle pas des objets)
// if, else, else if, while, for, do, try, catch ... les accolades de ces intructions représentent un "block-scope"

if (true) {
  // ce block de ce if commence ici ...
  console.log("---- début bloc 1 (if) ---");
  let userName = "Brian"; // la portée des let est relative au bloc dans lequel elle a été déclarée
  const users = ["foo", "bar", "baz"]; // idem pour les const
  console.log(userName);
  console.log(users);
  console.log("artiste 2 >>>> ", artiste2);
  console.log("------fin if-----");
  // ... et ce bloc if se termine ici !
} else {
  // ce block de ce if commence ici ...
  console.log("---- début bloc 2 (else) ----");
  var declareeDansUnBlockElse = "je suis la var déclarée dans le else";
  console.log(accessibleDansToutCeFichier, declareeDansUnBlockElse);

  accessibleDansToutCeFichier =
    "mise à jour de la var accessibleDansToutCeFichier";

  let userName = "Hamid"; // la portée des let est relative au bloc dans lequel elle a été déclarée
  const users = ["truc", "chose", "bidule"]; // idem pour les const
  console.log(userName);
  console.log(users);

  console.log(">>>", artiste);
  console.log("-----fin else------");
}

console.log(accessibleDansToutCeFichier);
console.log(declareeDansUnBlockElse);

try {
  console.log(users);
  console.log(userName);
} catch (toto) {
  console.error(toto);
}
