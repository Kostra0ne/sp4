// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import

// les import ne fonctionne QUE dans les fichier de type module (sinon vous aurez une erreur ...)
import { genererNombreAleatoireEntreDeuxEntiers, PI, monnaieDuShop } from "./utilitaires-exportes.js";

// import { Toto } from "./utilitaires-exportes.js";

// on peut donner un alias (un autre nom) à un export nommé
import { Toto as Titi } from "./utilitaires-exportes.js";

// import * as utils from "./utils.js";

import truc from "./utilitaires-exportes.js";

console.log(PI, monnaieDuShop);

// l'import default a été référencé dans ce module sous le nom truc
console.log("truc >>>", truc);

console.log(PI, monnaieDuShop);
// console.log(utils.PI, utils.monnaieDuShop);

console.log(genererNombreAleatoireEntreDeuxEntiers(1, 1000));

console.log(new Titi());

// console.log(utils.genererNombreAleatoireEntreDeuxEntiers(1, 1000));
