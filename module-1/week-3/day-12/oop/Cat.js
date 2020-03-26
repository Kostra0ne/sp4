console.log("welcome to a world of O.O.P");
// Object oriented Programming
// l'idée est de définir des classes d'objets, avec un comportement commun

// en PHP, Java, en C++ il y'a le concept de classes
// avant ES6, le lang n'avait pas ce mot-clé class... il n'y avait que des fonctions
// après cette mise à jour, le commité tc39, responsable de l'évolution de JS
// a décidé de porposer une syntax eplus simple à comprendre pour la majorité des devs

class Cat {
  // la classe Cat représente un schéma type, un modèle, un patron, un moule...
  // pour fabriquer des objets chats...
  // ces objets chats seront équipés de propriétés (clé/valeur)
  // et aussi , de méthodes (des fonctions) partagée par tous les chats

  constructor(name, age) {
    // dans le construct, on défini les propriétés des instances de Cat
    if (isNaN(age)) throw new TypeError("age must be of type number");
    this.name = name;
    this.age = age;
  }

  // on définit les méthodes (les fonctions qui sont attachées à cette classe en particulier)
  // pas de mot clé function... juste le nom de la méthode (la fonction) suivie de parenthèse et accolades
  talk() {
    return "miaouuuh";
  }
}

try {
  const felix = Cat(); // TypeError: Class constructor Cat cannot be invoked without 'new'
} catch (err) {
  console.log(err);
}

// on invoque une classe (ou instancie un classe) avec le mot-clé new
const felix = new Cat("Felix", 10);
console.log(typeof felix); // les classes retourne TJS des objets
console.log(felix); // l'objet contenu dans la const felix est une instance de Cat

const kitty = new Cat("Kitty", 3);
console.log(kitty); // l'objet contenu dans la const felix est une instance de Cat

console.log(felix === kitty); // ce ne sont pas les même objets
console.log(felix instanceof Cat === kitty instanceof Cat); // par contre ces deux objets sont des instance de la classe Cat

console.log(felix.name, kitty.age); //... ils se comportent commetout objet littéral

console.log(felix.talk);
console.log(kitty.talk);

console.log(kitty.name + " dit " + kitty.talk());
console.log(felix.name + " dit " + felix.talk());

// console.log(felix.__proto__);
// console.log(felix.__proto__.talk);

const cat3 = new Cat("fugee", 0.7);
console.log(cat3);
console.log(cat3.talk());

// il existe plein de construct différents dans JS... par ex:
// console.log(new Date())
// console.log(new Array())
// console.log(new Object())
// console.log(new Function())