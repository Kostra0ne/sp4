
// les 6 (7) différents types de valeurs en JS ?

// Number, String, Boolean, null, undefined, Object, (Symbol)

// les 6 valeurs falsy ?

// false, null, undefined, NaN, 0, ""

if (true) console.log("yata !");
if ("yo") console.log("yata !");
if ({}) console.log("yata !");
if (0.000001) console.log("yata !");

// les valeurs falsy ne sont pas nécessairement égales à false
// mais elle se comportent comme telle du point de vue du if, ou des opérateurs logiques

if (false) console.log("yata ?");
if (null) console.log("yata ?");
if (undefined) console.log("yata ?");
if (NaN) console.log("yata ?");
if (0) console.log("yata ?");
if ("") console.log("yata ?");

// table de vérité du ET logique
// true  && true  => true
// false && false => false
// true  && false => false
// false && true  => false

// table de vérité du OU logique
// true  || true  => true
// false || false => false
// true  || false => true
// false || true  => true

console.log("----ET (guard operator) ---");

console.log(false && undefined); // falsy et falsy => retourne la première
console.log(undefined && false); // falsy et falsy => retourne la première
console.log(false && NaN);// falsy et falsy => retourne la première
console.log("1" && false); // truthy et falsy => false
console.log(undefined && "yolo"); // falsy et truthy => false
console.log(false && ""); // falsy et falsy => false

console.log("---OU (default operator----");
// dans la table du OU, le truthy gagne
console.log("yo" || undefined);
console.log("test" || NaN);
console.log("check" || false);
console.log("ça" || "");

console.log(undefined || "yo !");
console.log(NaN || "yo !");
console.log(0 || "yo !");
console.log(null || "yo !");


