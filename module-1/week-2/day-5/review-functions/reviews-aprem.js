function trouverTailleDUnMot(val) {
  return val.length;
}

const r1 = trouverTailleDUnMot("salut tout le monde");
const r2 = trouverTailleDUnMot("les fonctions c'est fun, mais dur à capter");
const r3 = trouverTailleDUnMot("le réseau est mauvais en moment");
const r4 = trouverTailleDUnMot("voilà c'est comme ça !");
const r5 = trouverTailleDUnMot("a");
const r6 = trouverTailleDUnMot("");

console.log(r1, r2, r3, r4, r5, r6);
// prendre le train pour aller en vacances => trouverTailleDUnMot()
// emmener des valises => paramètres
// return => retour de vacances

function trouverLaTailleDeLaChaineLaPlusLongue(val1, val2) {
  // on va utiliser la longueur (length) des strings fournies en paramètre (argument)
  if (typeof val1 !== "string" || typeof val2 !== "string")
    throw new TypeError("val1 et val2 doivent être de type String");

  if (val1.length > val2.length) return val1.length;
  return val2.length;
}

const r7 = trouverLaTailleDeLaChaineLaPlusLongue("truc", "bidule");
const r8 = trouverLaTailleDeLaChaineLaPlusLongue("a", "abc");
const r9 = trouverLaTailleDeLaChaineLaPlusLongue("123", "null");

console.log(r7, r8, r9);

