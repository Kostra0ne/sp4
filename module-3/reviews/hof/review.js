/**
 * Dummy implementation of the native Array.forEach function
 * @param {Function} callback Function that will be called on each array's iteration
 * @return {Object} the parsed array
 */
Array.prototype.myForEach = function (callback) {
  //   console.log(">>>>>", this); // ici this représente l'array sur lequel on appel myForEach
  for (let i = 0; i < this.length; i += 1) {
    callback(this[i], i, this);
  }
  return this;
};

const arr1 = [1, 2, 3, 4];
const arr2 = ["a", "b", "c", "d"];

arr1.myForEach(function (v, i, arr) {
  console.log("c'est dingue non ?", v, i, arr); // le callback de myForEach fournit la même implémentation que la version native: valeur, index, tableau complet
});

const whaaaat = arr2
  .myForEach((v, i, arr) => console.log(v, i, arr))
  .map((v) => v.toUpperCase()); // je peux map sur la valeur retournée par myForEach puisque c'est un array :D

console.log(whaaaat);

/// valeur falsy ...
// false, undefined, 0, null, "", NaN
// TOUTES LES AUTRES VALEURS SONT TRUTHY

const vegetables = ["patate", "choux", "celeri", "navet", "choux de bruxelles", "choux rouge", "potiron"];

const lesLegumesQueJAime = vegetables.filter((legume, index, arrComplet) => !legume.match("choux"));

console.log(lesLegumesQueJAime);

