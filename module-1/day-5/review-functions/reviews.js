// const prixProduits = {
//     pates: 4,
//     lait: 1,
//     pain: 2,
//     sucre: 3,
//     cornflakes: 4,
//     riz: 3,
//     danettes: 4
// };

// console.log(prixProduits.danettes) // indexation directe => on utilise le symbole sur un objet (l'accesseur) ...
// console.log(prixProduits.riz); // ... pour accéder au propriétés d'un objet
// console.log(prixProduits["pain"]); // on peut aussi utiliser l'indexation indirecte...
// console.log(prixProduits["cornflakes"]); // et accéder avec une String aux props d'un objet

const queRetourneLog = console.log("hello Jo'");
console.log("que retourne log ?", queRetourneLog);
console.log(typeof console);

// *************************************************
// *************************************************
// *************************************************

function connaitrePrixProduit(nomProduit) {
  var ruptureDeStock = false;
  if (ruptureDeStock === true) return null;
  const prixProduits = {
    pates: 4,
    lait: 1,
    pain: 2,
    sucre: 3,
    cornflakes: 4,
    riz: 3,
    danettes: 4
  };
  if (prixProduits[nomProduit] === undefined) {
    return "Désolé, ce produit n'est pas en stock...";
  }
  return prixProduits[nomProduit];
}

var prix;
prix = connaitrePrixProduit("pates");
console.log("prix a =>", prix);

prix = connaitrePrixProduit("lait");
console.log("prix b =>", prix);

prix = connaitrePrixProduit("pain");
console.log("prix c =>", prix);

prix = connaitrePrixProduit("sneakers");
console.log("prix d =>", prix);

// *************************************************
// *************************************************
// *************************************************

function recupererTousLesProduits() {
  const p = {
    pates: 4,
    lait: 1,
    pain: 2,
    sucre: 3,
    cornflakes: 4,
    riz: 3,
    danettes: 4
  };
  return p;
}

const listeProduits = recupererTousLesProduits(); // étape 1 exécution
// ... puis on récupère ce que la fonction nous retourne :  ttout ça en une ligne de code !!!!
// const listeProduits = {
//   pates: 4,
//   lait: 1,
//   pain: 2,
//   sucre: 3,
//   cornflakes: 4,
//   riz: 3,
//   danettes: 4
// };

console.log("Liste produits", listeProduits);

const unPrixProduit = recupererTousLesProduits().pates;
console.log("un seul prix de produit", unPrixProduit);

// *************************************************
// *************************************************
// *************************************************

function foo() {
  return 42;
}

const queVautFoo = foo();
// const queVautFoo = 42;

const nouvelleBoite = foo;
const uneAutreEtiquette = foo;
console.log("on est làààà", nouvelleBoite);

const queVautEncoreFoo = nouvelleBoite();
console.log("on est toujours là ?", queVautEncoreFoo);

console.log(uneAutreEtiquette === nouvelleBoite); // TRUE !!!!

// *************************************************
// *************************************************
// *************************************************

const chat = {
  name: "Fugee",
  age: 0.6,
  estSympa: true,
  talk: function(humeur) {
    // si humeur est strictement à la string 'bonne', retourne 'meowwww', sinon retourne 'shhrrhhhhhh'
    return humeur === "bonne" ? "meowwww" : "shhrrhhhhhh"; // operateur ternaire

    // la ligne du dessus est équivalente à celles qui suivent =>

    // if (humeur === "bonne") {
    //   return "meowwww";
    // } else {
    //   return "shhrrhhhhhh";
    // }
  }
};

var cle = "estSympa";
console.log(chat.name); // accès indexation directe
console.log(chat["name"]); // accès par indexation indirecte ... même effet => Fugee
console.log(chat[cle]); // accès par indexation indirecte ... même effet => true
console.log(chat["choubidooo"]); // undefined
console.log(typeof chat.talk); // function
console.log(typeof chat.talk()); // string
console.log(typeof "meowwww"); // on a reçu 'string' à la ligne précédente car cat.talk() retourne un String
console.log(chat.talk()); // chat pas content
console.log(chat.talk('bonne')); // chat content
console.log(chat.talk('Bonne')); // chat pas content
console.log(chat.talk('foo')); // chat pas content
