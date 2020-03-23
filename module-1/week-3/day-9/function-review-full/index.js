// 2 / Écrire une fonction hello.
// Dans le corps de hello, afficher la chaîne «hello» dans la console.
// Ne pas utiliser return pour cette fonction.
// Quelle est la valeur de console.log(hello()) et pourquoi ?

// entrée dans la fnac

"-----( )-----";
"|   fnac     |";
"|            |";
"|            |";
"-----| |------";
// sortir de la fnac

function allerAlaFnac() {
  // j'arrive à la fnac'...
  // je me balade dans les rayons
  // je choisis un bouquin
  // je paie
  // je m'en vais
  return {
    titre: "Vernon Subutex de Virgnie Despentes",
    prix: 6 < 23
  };
}

var resultat1 = allerAlaFnac();

var resultat2 = allerAlaFnac();

function hello() {
  console.log("salut ça va");
}

console.log(hello());
console.log(hello());
console.log(hello());

var vazyMario = allerAlaFnac();
console.log(typeof vazyMario.prix);

// 3 / Écrire une fonction dummyReturn, prenant un paramètre p.
// Retourner p, non modifié.
// Tester avec l’instruction console.log(dummyReturn()) Tester avec une affectation, var x = dummyReturn(), log(x)

function dummyReturn(p) {
  return p;
}

// console.log("----------------------");
// console.log(dummyReturn("hello Muram"));
// console.log(dummyReturn(typeof "hello Muram"));
// console.log(dummyReturn(23 > 100));
// console.log(dummyReturn({ name: "sophia" }));
// console.log(dummyReturn(123 > 120 || false));
// console.log(dummyReturn());

// 4 / Écrire une fonction foo.
// foo ne prend pas de paramètre.
// Retourner la chaîne «bar» quand elle est exécutée. Tester avec l’instruction console.log(foo())
// Tester avec une affectation, var x = foo()

function foo() {
  return "bar";
}

var resultOuf;

resultOuf = foo();
// console.log(resultOuf);

if (123 <= 123) {
  resultOuf = foo();
  //   console.log(resultOuf);
}

function choubidou(a, b, c) {
  return a + b + c;
}

var x = choubidou("truc", "machin", "bidule");
// console.log(x);

// 5 / Écrire une fonction helloWho, prenant un paramètre nom.
// Retourner la chaîne «hello» concaténée avec nom.
// Tester avec l’instruction console.log(helloWho())
// Tester avec une affectation, var x = helloWho()

function helloWho(nom) {
  return "hello " + nom;
}

console.log(helloWho("Sophia da boss of return !!!"));
var x = helloWho("Donald Trump");
// console.log(x);

// 6 / Écrire une fonction isNumber, prenant un paramètre n.
// Retourner true si n est un nombre, false sinon.
// Tester avec l’instruction console.log(isNumber());
// Tester avec une affectation, var x = isNumber()

function isNumber(n) {
  if (typeof n === "number") return true;
  else return false;
}

var resIsNumber = isNumber(NaN);
// console.log("====SUSPENS====>", resIsNumber);

// true Hawa Muram Dalila Kenwele Fazila Mario Maria Saïda Oussama
// false Sophia Anne Abdalaye Jonathan Tessia

// 7 / Écrire une fonction contraire, prenant un paramètre un booléen b.
// Si b n’est pas une booléen, retourner une nouvelle Erreur. Sinon retourner le booléen contraire de b.
// Tester avec l’instruction console.log(contraire());
// Tester avec une affectation, var x = contraire()

// function contraire(b) {
//   if (b === true) return false;
//   return true;
// }

function contraire(b) {
  return !b;
}

console.log(contraire(true)); // should return false
var resultContraire = contraire(false); // should return true
console.log(resultContraire);

// 8 / Écrire une fonction isEmpty, prenant un paramètre p.
// isEmpty retourne true si:
// - Si p est un tableau et que sa longueur est nulle.
// - Si p est une string de taille 0.
// - Si p est un objet sans aucune propriété.
// Sinon isEmpty retourne false.
// Tester avec l’instruction console.log(isEmpty()); Affecter avec NOT isEmpty, var x = !isEmpty()

function isEmpty(p) {
  // checker si p est un tableau, vérifier sa longueur => si 0 return true sinon false
  if (Array.isArray(p)) {
    return p.length === 0;
  } else if (typeof p === "string") {
    // sinon checker si p est une string, vérifier sa longueur => si 0 return true sinon false
    return p.length === 0;
  } else if (typeof p === "object") {
    // sinon check si p est un objet, vérifier qu'il a des propriétés (rechecrhe google => mdn => stackoverflow)
    /*La méthode Object.keys(unObj) renvoie un tableau contenant les noms des propriétés propres à un objet (qui ne sont pas héritées via la chaîne de prototypes) et qui sont énumérables. L'ordre de ce tableau est le même que celui obtenu par une boucle for...in (à la différence qu'une boucle for-in liste également les propriétés héritées).*/
    return Object.keys(p).length === 0;
  } else {
    throw new TypeError(
      "p doit être soit une string, soit un array, soit un object"
    );
  }
}

// vs code => prettier / beautify / 
// git for windows
// node install => nodejs.org windows (v12 => LTS)
// npm install -g lite-server
// npm install -g nodemon
// essaie de créer un nouveau repo git  => git push => authentification

function isEmpty2(p) {
  const checkInput = v =>
    Array.isArray(v) || typeof v === "string" || typeof v === "object";

  if (!checkInput(p))
    throw new TypeError(
      "p doit être soit une string, soit un array, soit un object"
    );

  return typeof p === "object" ? Boolean(Object.keys(p).length) : Boolean(p.length);
}

var resIsEmpty;

resIsEmpty = isEmpty([]); // should return true
console.log("test isEmpty 1 >", resIsEmpty);

resIsEmpty = isEmpty([2, 34, 4444]); // should return false
console.log("test isEmpty 2 >", resIsEmpty);

resIsEmpty = isEmpty("salut"); // should return false
console.log("test isEmpty 3 >", resIsEmpty);

resIsEmpty = isEmpty(""); // should return true
console.log("test isEmpty 4 >", resIsEmpty);

resIsEmpty = isEmpty({}); // should return true
console.log("test isEmpty 5 >", resIsEmpty);

resIsEmpty = isEmpty({ courageAuMax: true, waxOnWaxOffMode: true }); // should return false
console.log("test isEmpty 6 >", resIsEmpty);
