console.log("------ 1 ------ ");
console.log(x); // affiche undefined sans planter

var x, foo;
x = 123; // var sont hoïstées =>
console.log("------ 2 ------ ");
console.log(x);
// hebergées automatiquement en tout début du fichier (en mémoire)

// ON DIFFERENCIE LES BLOCK SCOPES....

if (123 < 1000) {
  // block if
  console.log("yep, on est bien dans le if...");
  console.log("------ 3 ------ ");
  console.log(x); // affiche 123
  let toto = "titi"; // la portée de let est le block dans lequel elle a été declarée
  console.log(toto); // affiche titi
} else {
  // block else
  console.log(toto); // lève une erreur : accéder à une let ou une const non initialisée lève systématiquement une Error de type ReferenceError:
  console.log("nope");
}

console.log("------ 4 ------ ");
try {
  console.log(toto);
  // block try
} catch (err) {
  // block catch
  console.error(err); // l'erreur est bien lancée, mais rattrapée dans le block catch...
}

// ON DIFFERENCIE LES FUNCTION SCOPES....

console.log("------ 5 ------ ");

function sum(a, b) {
  // block de la fonction sum
  // portée des variables est fonctionnelle (var, let, const)
  // donc si une var est déclarée dans une fonction, elle est accessible dans tous le scope de la fonction et ses sous scopes... puisqu'une fonction peut contenir d'autres functions...
  var res = a + b;
  console.log(res);
  return res;
}

var x = sum(1, 1);

try {
  console.log(res); // res est undefined en dehors du scope de sum()
} catch (error) {
  console.error(error);
}

console.log("------ 6 IIFE ------ ");

(function foo() {
  const user1 = "Joe";

  console.log("> ", user1);

  (function bar() {
    let user2 = "Tahn";
    console.log(">> ", user1);
    console.log("# ", user2);

    (function baz() {
      var user3 = "Hans";
      console.log(">>> ", user1);
      console.log("## ", user2);
    })();
  })();

  //   console.log("> ", user2); // lève une erreur car user2 n'est accessible que dans le scope de bar... et ses sous-scopes...
})();

function autreScope() {
  const user1 = "Adlane";
  console.log("%% >", user1);
}

autreScope();

// SHADOWING
console.log("------ 7 SHADOWING ------ ");

function encoreUnAutreScope() {
  const user1 = "Adlane";

  function imbriquee() {
    const user1 = "Vincent";
    // user1 va shadow (faire de l'ombre ..) à user1 définie dans le scope parent...
    // le shadowing fonctionne dans le scope de la fonction courante...
    console.log("** ", user1);
  }

  console.log("*", user1);

  imbriquee();

  console.log("***", user1);
}

encoreUnAutreScope();

// KEEP CALM AND WAX ON WAX OFF !!!
