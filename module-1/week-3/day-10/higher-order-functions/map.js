const products = [
  { id: 1, name: "smart phone", price: 400, stock: 0 },
  { id: 2, name: "smart watch", price: 300, stock: 100 },
  { id: 3, name: "smart frigo", price: 650, stock: 10 },
  { id: 4, name: "smart home", price: 1000000, stock: 0 },
  { id: 5, name: "tablet Samsung", price: 420, stock: 1000 },
  { id: 6, name: "iphone", price: 1000, stock: 40 },
  { id: 7, name: "ipad", price: 500, stock: 0 }
];

const doublerPrix = product => {
  const clone = { ...product }; // créer une copie du produit courant
  clone.price = clone.price * 2; // comme ça je ne modifie pas l'objet initial
  return clone;
};

function discount10Pourcent(product) {
  const clone = { ...product }; // cet opérateur est nommé "spread"
  clone.price = clone.price - (clone.price * 10) / 100;
  return clone;
}

// console.log(doublerPrix({ id: 1, name: "smart phone", price: 400, stock: 0 }));

// Array.map (HOF) va parcourir toute les cases d'un tableau et retourner un nouveau contenant toutes les valeur initiales modifiées.

const productsVachementPlusCher = products.map(doublerPrix);
const productsSoldes = products.map(discount10Pourcent);

console.log("prix doublés ....", productsVachementPlusCher);
console.log("discount 10% ....", productsSoldes);

// reference vers le objets... c'est une problématique en JS
const user1 = {
  name: "foo",
  age: 20
};

const user2 = { ...user1 }; // spread récupère toutes les props/value d'un objet et mles assigne à un nouvel objet !!! c'est un clone

user2.age = 30;

console.log(user1 === user2);

const arr1 = [1, 2, 3];

const arr2 = arr1; // arr2 ne fait que référencer arr1 sous un autre nom...
const arr3 = [...arr1]; // avec spread, on peut cloner également des arrays !
// don't forget, le type des arrays est object !!!
arr2.push(4);
arr1.push(4000);

console.log(arr1, arr1 === arr2);
console.log(arr3, arr1 === arr3);

const numbers = [1, 2, 3, 4, 5];
const numbersDoubles = numbers.map(nbr => nbr * 2);
console.log("numbers doublés => ", numbersDoubles);

const prenoms = ["HAKIM", "BILL", "CLEMENT", "YANG", "SILVIA"];
const prenomsMinuscules = prenoms.map(prenom => prenom.toLowerCase());
console.log("prenoms modifiés => ", prenomsMinuscules);
// console.log(prenoms); // le tableau original reste intact (il contenait des valeurs primitves (pas des objets))






