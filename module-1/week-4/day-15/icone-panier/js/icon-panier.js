// -----------------------------------------------------------
// 1 - sélection des éléments utiles à plusieurs endroits du programme (module)
// -----------------------------------------------------------
console.log("hello");

const icon = document.getElementById("icon-shopcart");
const products = document.querySelectorAll(".product"); // sélectionne tous les élements portant la classe product
// const products = document.getElementsByClassName("product"); // ou comme ça ...

// -----------------------------------------------------------
// 2 - définition des fonctions (actions) du module
// -----------------------------------------------------------

function toggleShopcart() {
  alert("mon panier");
}

function addProductToShopcart() {
  console.log("@todo : incrémenter le panier");
}

function parseProducts() {
  // parcourir tous les produits avec une boucle
  products.forEach(product => {
    console.log(product);
    product.addEventListener("click", addProductToShopcart);
  });
}

// -----------------------------------------------------------
// 3 - exécution des actions initiales (au chargement du module)
// -----------------------------------------------------------

parseProducts();

// -----------------------------------------------------------
// 4 - application des écouteurs d'évènements (event listeners)
// -----------------------------------------------------------

// icon.addEventListener("click", toggleShopcart); // écoute les clicks sur l'icône
icon.onclick = toggleShopcart; // ... ou comme ça
