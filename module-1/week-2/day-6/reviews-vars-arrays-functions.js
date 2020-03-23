// - arrays, matrices
// - var, const, let
// - functions/param/return

console.log("************* 1 var / const / let *******************");

var test = "123";
console.log(test);

test = "youhou !";
console.log(test);

const x = 12;

var res = x * 2;

console.log("res 1  >", res);

try {
  x = 23; // la réaffectation d'une constante est interdite !!!
  // ci-dessus : TypeError: Assignment to constant variable.
} catch (err) {
  console.log(err); // si une erreur survient, on l'attrappe ... et le programme continue ;)
}

// console.log(">>>>>>", humaine); // les constante ne sont pas hoïstées...

const humaine = {
  nom: "Cindy",
  age: 23,
  estSimplonienne: true,
  promo: "Sarcelles P2",
  languagesFavoris: ["JS", "Python", "SQL"]
};

console.log(">>>>>>", humaine); /// constante/let sont uniquement accessible après déclaration...

console.log(humaine.nom + " a " + humaine.age);
console.log(
  `${humaine.nom} a ${humaine.age} : elle est de la promo ${humaine.promo}`
);

humaine.hobbies = ["fooding", "footing", "fooling around"];

console.log(humaine);

if (humaine.age > 20) {
  // la condition est truthy, donc on se retrouve dans le bloc if ...
  var xx = "Vérifions la portée de cette variable !!!"; // les variable hoistée
  let varLocaleAuIf = "cette var n'est accessible que dans ce bloc...";
  console.log(" res let >", varLocaleAuIf);
}

console.log(">>>>>>", testHoisting);
var testHoisting = "cette variable va êtres hoïstée";
console.log(">>>>>>", testHoisting);

console.log("res 2 (xx) > ", xx);
// console.log(" res let >", varLocaleAuIf);

console.log("************* 2 - arrays / matrices *******************");

const prenoms1 = ["jim", "jill", "will", "bill"]; // l(4)
const prenoms2 = ["jim", "jill", "will", "bill"]; // l(4)
const fruits = ["pomme", "mangue", "poire", "pêche", "cerise", "ananas"];
//         -1   //  0        1         2        3        4        5
console.log("les tableaux sont ils égaux >>> ", prenoms1 === prenoms2); // false

// Dans la console : afficher la pomme, la mangue, la pêche et l'ananas

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[3]);
console.log(fruits[5]);

fruits.push("fruit de la passion");

// Dans la console : afficher toujours le dernier fruit
console.log(fruits[fruits.length - 1]);

console.log("************* 3 functions / params / return *******************");

function testFunction() {
  return "ceci est une fonction de test (pas super utile)";
}

console.log(testFunction());

// coder une fonction retourneDerniereValArray ...
// qui prend un array en param et retourne sa dernière valeur

function retourneDerniereValeurArray(tableau) {
  // if (!Array.isArray(tableau))
  if (Array.isArray(tableau) === false)
    throw new TypeError("désolé j'ai besoin d'un tableau...");
  return tableau[tableau.length - 1];
}

// console.log(typeof [].length); // number (toujours)
// console.log(typeof []); // object (toujours)

console.log("a >>>", retourneDerniereValeurArray(prenoms1));
console.log("b >>>", retourneDerniereValeurArray(fruits));
console.log("c >>>", retourneDerniereValeurArray(["a", "b", "c"]));
// console.log("d >>>", retourneDerniereValeurArray({}));
// console.log("e >>>", retourneDerniereValeurArray("Latifa"));

// pour vérifier si une valeur est un array , on utilise la fonction Array.isArray(val)
// console.log(Array.isArray([]));
// console.log(Array.isArray([1, 2, 44]));
// console.log(Array.isArray(null));
// console.log(Array.isArray("toto"));

console.log("The end: fin de programme !!!");
