const booleans = [true, false, false, true, true, true, false];
const strings = ["hello", "simplon", "code", "for", "victory"];
const numbers = [123, 1, -1000, 2303.63];
const user = {
  name: "Jimmy",
  lastname: "Foo",
  age: 23,
  city: "Code City",
};

console.log("----------- for -----------------");
// for --- parcourir tous les booleans
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
for (let i = 0; i < booleans.length; i += 1) {
  console.log(i, " --- ", booleans[i]);
}

console.log("----------- while -----------------");
// while --- parcourir tous les nombres
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/while
var count = 0;
while (count < numbers.length) {
  console.log(count, " --- ", numbers[count]);
  count += 1;
}

console.log("------------- forEach ---------------");
// forEach --- parcourir tous les nombres
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach

numbers.forEach((nb, i) => console.log(i, " --- ", nb));

console.log("------------- for ... of  ---------------");
// for ... --- of parcourir toutes les strings
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...of

for (let val of strings) {
  console.log(val);
}

console.log("------------- for ... in  ---------------");
// for .. in parcourir --- toutes props de l'object user
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...in

for (let prop in user) {
  console.log(prop, " --- ", user[prop]);
}
