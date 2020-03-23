// temps 1 : déclaration

function maFunctionDeReview() {
  // par défaut une fonction retourne undefined (une valeur falsy);
}

// les var commencent par $, _, lettres min/maj (les var/function commençant par une maj ont une sémantique à part : Constructeurs)
var res = maFunctionDeReview();

if (res) {
} else {
  console.log("on passera ici si la fonction retourne undefined");
  // pour rappel, les valeurs falsy sont : 0 undefined null false NaN ""
}

function comprendreLesParametres(a, b, c) {
  // on nomme également les paramètres arguments
  // par défault, les params valent undefined
  var typesDesParams = `${typeof a} ${typeof b} ${typeof c}`;
  return typesDesParams;
}

console.log("-------------------------------");

res = comprendreLesParametres("titi", "toto", "tutu");
console.log("a > ", res);
res = comprendreLesParametres("1", "2", 3);
console.log("b > ", res);
res = comprendreLesParametres("1", "2");
console.log("c > ", res);
res = comprendreLesParametres("1", undefined);
console.log("d > ", res);

function definirDesValeursDeParamParDefautCustom(a = "foo", b) {
  // si a n'est pas fourni en argument, sa valeur sera définie à "foo"
  // ça peut être utile en fonction des cas ...
  console.log(a, b);
}

console.log("-------------------------------");

res = definirDesValeursDeParamParDefautCustom();
res = definirDesValeursDeParamParDefautCustom("bar", "baz");
res = definirDesValeursDeParamParDefautCustom(null, "yo");
res = definirDesValeursDeParamParDefautCustom(NaN);
res = definirDesValeursDeParamParDefautCustom(123);

// conseil : 1 fonction === une action
// si besoin de plusieurs actions, il vaut mieux créer autant de fonctions que d'actions nécessaires et les combiner
// ta fonction, tu peux la comprendre comme un verbe, une action ...

// 1 - coder une fonction soustraire / 2 params, retourne la soustraction des deux params
// 2 - gérer le cas de NaN: si le resultat est NaN, return "mauvais résultat"

function soustraire(a, b) {
  var result = a - b;
  if (isNaN(result)) return "a et b doivent être des nombres";
  else return result;
}

// function soustraire(a, b) {
//   if (isNaN(a) || isNaN(b)) return "a et b doivent être des nombres";
//   return a - b;
// }

// function soustraire(a, b) {
//   if (isNaN(a) || isNaN(b))
//     throw new TypeError("a et b doivent être des nombres");
//   return a - b;
// }

// res = soustraire(1, 1);
// console.log("d >", res);
// res = soustraire(10, 1);
// console.log("e >", res);
// res = soustraire(20, 13);
// console.log("f >", res);
// res = soustraire("toto", "titi");
// console.log("g >", res);
// res = soustraire("tutu", "tata");
// console.log("i >", res);
res = soustraire(23, "1.O");
console.log("j >", res);

// func/param/return groupe reinforcement :
// Sophia / Maria / Tessia / Kenwele / Mario / Jonathan / Dalila / Latifa / Fazila / Anne / Abdalaye / Muram / Oussama / Hawa / Karima / Saïda // Rayan

// retourne le nombre de caractères compris dans la chaine passée en argument
// si argument n'est pas une string, lever une erreur de type

/**
 * @author Guillaume@owlab.dev
 * @param {String} mot n'importe quelle chaîne de caractères... 
 * @throws {TypeError} si mot n'est pas une string
 */
function compterLettresMot(mot) {
  if (typeof mot !== "string") throw new TypeError("Attention : mot n'est pas de type string");
  return mot.length;
}

try {
  res = compterLettresMot("choubidou");
  console.log("j => ", res);
  res = compterLettresMot("corona");
  console.log("k => ", res);
  res = compterLettresMot(1234454);
  console.log("l => ", res);
} catch (err) {
  console.error(err);
}

console.log("fin de programme ...");
