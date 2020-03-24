const products = [
  { id: 1, name: "smart phone", price: 400, stock: 0 },
  { id: 2, name: "smart watch", price: 300, stock: 100 },
  { id: 3, name: "smart frigo", price: 650, stock: 10 },
  { id: 4, name: "smart home", price: 1000000, stock: 0 },
  { id: 5, name: "tablet Samsung", price: 420, stock: 1000 },
  { id: 6, name: "iphone", price: 1000, stock: 40 },
  { id: 7, name: "ipad", price: 500, stock: 0 }
];

// une autre HOF, super utile est le filter (check mdn array.filter)
// par ex: filtrer les produits (conserver uniquement) les produits dont le prix est supérieur ou égale à 1000

console.log("------------ 1 avec for --------------");

function filterProducts(productsToFilter, priceLimit) {
  const filtered = [];
  for (let index = 0; index < productsToFilter.length; index++) {
    if (productsToFilter[index].price >= priceLimit) {
      filtered.push(productsToFilter[index]);
    }
  }
  return filtered;
}

console.log(filterProducts(products, 1000));

console.log("------------ 2 avec filter --------------");

// on peut rédiger ce code de façon bcp plus élégante avec Array.filter !

const filtered1 = products.filter(function(product) {
  // filter retourne toujours true || false
  return product.price >= 1000;
});

console.log(" 1 >", filtered1); // filter retourne toujours un npuveau tableau !!!

// ci-dessous la version plus compacte avec une fat-arrow function :D
const filtered2 = products.filter(product => product.price >= 1000);

console.log("----------------------------------------");

console.log(" 2 >", filtered2);
// filter parcourt tout le tableau et effectue un test à chaque valeur
// il retourne un nouveau tableau constitué de tous les éléments qui retourné true à l'expression booléene fournie dans le callback
const prodsEnStock = products.filter(product => product.stock > 0);

console.log(prodsEnStock);
