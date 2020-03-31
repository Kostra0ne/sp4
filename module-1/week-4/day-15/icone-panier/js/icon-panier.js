// -----------------------------------------------------------
// 1 - sélection des éléments utiles à plusieurs endroits du programme (module)
// ou  les éléments auxquels on accède fréquement ... ici ligne 19/22, à chaque click sur une icone product
// -----------------------------------------------------------

const shopCartCount = document.getElementById("shopcart-count");

// -----------------------------------------------------------
// 2 - définition des fonctions (actions) du module
// -----------------------------------------------------------

function toggleShopcart() {
  alert("mon panier");
}

function addProductToShopCart() {
  // incrémente le panier de 1 à chaque click sur un produit
  // console.log(typeof shopCartCount.textContent); // c'est une string
  var newProductCount = Number(shopCartCount.textContent) + 1; // donc on la convertit en nombre
  if (isNaN(newProductCount))
    throw new TypeError("Mauvais data type pour le shopcart-count");
  shopCartCount.textContent = newProductCount; // on met à jour le textContent (incrémentation de 1)
  return newProductCount;
}

// -----------------------------------------------------------
// 3 - exécution des actions initiales (au chargement du module)
// -----------------------------------------------------------

// -----------------------------------------------------------
// 4 - application des écouteurs d'évènements (event listeners)
// -----------------------------------------------------------

// icon.addEventListener("click", toggleShopcart); // écoute les clicks sur l'icône
document.getElementById("shopcart-icon").onclick = toggleShopcart; // ... ou comme ça, c'est pareil et plus court

// sélectionne tous les élements portant la classe product
document.querySelectorAll(".product").forEach(product => {
  // console.log(product); // chacun des products
  const icon = product.querySelector(".shopcart-add-icon"); // chaque icône contenue dans chacun des produits
  icon.addEventListener("click", addProductToShopCart); // on écoute les clicks sur l'icône courante
});




