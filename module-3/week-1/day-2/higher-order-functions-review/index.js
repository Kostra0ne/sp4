const users = ["foo", "bar", "bazzz"];

// forEach
users.forEach((user) => console.log(user)); // callback !!!

// map
const modifiedUsers = users.map((user) => user.toUpperCase());

console.log("1 >", modifiedUsers); // ?

// filter
const usersStartingWithB = users.filter((user) => user.startsWith("b"));

console.log("2 >", usersStartingWithB); // ?

// reduce
const x = users.reduce((acc, val) => (val.includes("a") ? acc + 1 : acc), 0);

console.log("3 >", x); // ?

const xx = users.reduce(function (accumulateur, valeurCourante, i) {
  if (valeurCourante.includes("a")) return accumulateur + 1;
  return accumulateur; // retourne une valeur, normalement modifiée sous certaines condition
}, 0); // le deuxième argument de reduce est la valeur initiale de l'accumulateur

console.log("4 >", xx); // ?
