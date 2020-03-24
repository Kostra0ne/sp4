const products = [
  { id: 1, name: "smart phone", price: "400", stock: 0 },
  { id: 2, name: "smart watch", price: 300, stock: 100 },
  { id: 3, name: "smart frigo", price: 650, stock: 10 },
  { id: 4, name: "smart home", price: 1000000, stock: 0 },
  { id: 5, name: "tablet Samsung", price: 420, stock: 1000 },
  { id: 6, name: "iphone", price: "1000", stock: 40 },
  { id: 7, name: "ipad", price: 500, stock: 0 }
];

// reduce, c'est le couteau suisse des HOF
// il parcourt tout le tableau et reduit ce tableau à une valeur unique
// la valeur réduite peut être de n'importe quel type...

// pour créer une somme !!!

// reduce est HOF
// donc il prend en argument un callback ET AUSSI un accumulateur
// m'accumulateur peut être de n'importe quel type ...
// le callback de reduce prend 2 arguments obligatoires (acc, valCourante)
// et deux argument optionnels (index et le tableau complet)
const sum = products.reduce(function(accumulateur, product) {
  if (isNaN(product.price)) throw new TypeError("sorry gros ça marche pas là");
  return (accumulateur += Number(product.price));
}, 0);

// la const sum vaut la valeur de l'accumulateur au dernier return

// const sum = products.reduce((acc, p) => acc += p.price, 0);

console.log("la somme du prix de tous les produits est ", sum);
