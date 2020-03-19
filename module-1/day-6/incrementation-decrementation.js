
// - incrémentation
// - décrémentation
// - opérateur d'affectation (+=)
// - opérateur d'affectation (-=)
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_d_affectation

var x = 0;
console.log(x); // 0

x = x + 1; 
console.log(x); // 1

x += 1;
console.log(x); // 2

x += 10; // ajoute 10 à 2
console.log(x); // 12

x++; // incrementation (ajoute 1)
console.log(x); // 13

x--; // decrementation (retire 1)
console.log(x); // 12

x -= 10;  // retire 10 de 2
console.log(x); // 2

x -= 1;
console.log(x); // 1

x = x - 1;
console.log(x); // 0

var y = 10;
y *= 100; // multiplie 10 par 100
console.log(y); // 1000
