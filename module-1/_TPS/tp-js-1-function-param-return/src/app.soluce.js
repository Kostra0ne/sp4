/*

helpers : 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

*/

exports.demoFunction1 = function() {
  return "Wax on, off";
};

exports.demoFunction2 = function(a, b, c) {
  return `${a}-${b}-${c}`;
};

exports.dummyFunction = function() {
  return;
};

exports.sayHelloWorld = function() {
  return "hello, world";
};

exports.isNumberBig = function(n) {
  if (isNaN(n)) throw new TypeError("The parameter n should not b NaN");
  return n >= 10000 ? "It's a big number !" : "It's a small number !";
};

exports.sum = function(a, b) {
  if (isNaN(a) || isNaN(b))
    throw new TypeError("Params a and b should be of type number");
  return a + b;
};

exports.greetingUser = function(firstname, lastname) {
  if (typeof firstname !== "string" || typeof lastname !== "string")
    throw new TypeError("firstname and lastname should be of type string");

  if (typeof firstname.length < 2 || lastname.length < 2)
    throw new TypeError("firstname and lastname's length should be at least 2");

  return `Hello ${firstname} ${lastname}`;
};

exports.displayUserInfos = function(firstname, lastname, age) {
  if (typeof firstname !== "string" || typeof lastname !== "string")
    throw new TypeError("firstname and lastname should be of type string");
  if (typeof age !== "number")
    throw new TypeError("age should be of type number");
  return `The user ${firstname} ${lastname} is ${age} years old`;
};

exports.makeOpposite = function(b) {
  if (typeof b !== "boolean")
    throw new TypeError("b should be of type boolean");
  return !b;
};

exports.createACat = function(name, age, color, eyeColor, isCute) {
  if (isNaN(age)) throw new TypeError("age must be of type number");
  if (typeof isCute !== "boolean")
    throw new TypeError("ic must be of type boolean");

  return {
    name,
    age: Number(age),
    color,
    eyeColor,
    isCute
  };
};

// exports.getTheWinner = function(player1, player2) {
//   if (player1.score > player2.score) {
//     return `The winner is: ${player1.name}`;
//   } else if (player2.score > player1.score) {
//     return `The winner is: ${player2.name}`;
//   }
// };

exports.getTheWinner = function(player1, player2) {
  if (player1.score > player2.score) {
    return `The winner is: ${player1.name}`;
  }
  return `The winner is: ${player2.name}`;
};

// exports.getTheWinner = function(player1, player2) {
//   if (player1.score > player2.score) {
//     return `The winner is: ${player1.name}`;
//   } else if (player2.score > player1.score) {
//     return `The winner is: ${player2.name}`;
//   }
// };

// exports.getTheWinner = function(player1, player2) {
//   var msg = "The winner is: ";

//   if (player1.score > player2.score) {
//     msg += player1.name;
//   } else {
//     msg += player2.name;
//   }

//   return msg;
// };

// exports.getTheWinner = function(player1, player2) {
//   const msg = "The winner is:";
//   return player1.score > player2.score ? `${msg} ${player1.name}` : `${msg} ${player2.name}`;
// };

// exports.getTheWinner = function(player1, player2) {
//   return player1.score > player2.score ? `The winner is: ${player1.name}` : `The winner is: ${player2.name}`;
// };

// NE PAS HARDCODER (ecrire en dur) dans une fonction pour contourner la difficulté de copmpréhension des paramètres ...
// on utilise justement pour que nos focntion ait le même comportement quel que soit les valeurs reçue en entrée (en param)

// function ajouterProduitAuStock(nom, prix, ref, stock) {

//   var prod = {
//     nom: "mon produit favoris",
//     prix: 40,
//     ref: "NEFAISPASCA",
//     stock: -10
//   };

//   inserEnBaseDonnees(prod);

//   // inserEnBaseDonnees({
//   //   nom,
//   //   prix,
//   //   ref,
//   //   stock
//   // })
// }

// ajouterProduitAuStock("chaussette", 2, "CHSFDD23", 20);
// ajouterProduitAuStock("ballon foot", 10, "FOOT3424", 4);
// ajouterProduitAuStock("smartphone", 100, "SMARTDFDF3", 400);
