const users = [
  { name: "bill", lastname: "bar", id: 10, age: 20, email: "foo@bar.com" },
  { name: "jane", lastname: "doe", id: 30, age: 40, email: "jane@doe.io" },
  {
    name: "jim",
    lastname: "foo",
    id: 100,
    age: 30,
    email: "jimmy@foo.org",
    isAdmin: true
  }
];

const products = [
  {
    id: 1,
    name: "Sony Bravia",
    price: 500,
    stock: 20,
    rate: 3.5,
    category: "multimedia"
  },
  {
    id: 2,
    name: "skateboard element full",
    price: 180,
    stock: 3,
    rate: 5,
    category: "sport"
  },
  {
    id: 3,
    name: "Samsung S7",
    price: 600,
    stock: 10,
    rate: 4,
    category: "multimedia"
  },
  {
    id: 4,
    name: "Baby radio",
    price: 20,
    stock: 100,
    rate: 5,
    category: "babies"
  }
];

const orders = [
  { id: 1, userID: 10, productID: 1234, quantity: 2, date: "19-02-2019" },
  { id: 2, userID: 10, productID: 1, quantity: 1, date: "01-01-2020" },
  { id: 3, userID: 30, productID: 2, quantity: 1, date: "25-03-2020" }
];

function isUserValid(id) {
  const found = users.filter(user => user.id === id);
  return found.length === 1;
}

function isProductValid(id) {
  // je parcours tous les produits pour vérifier si l'un d'eux matche avec l'id fourni en argument
  const found = products.filter(function(prod) {
    return prod.id === id;
    // si vrai, retourne l'objet dans un nouveau tableau
  });
  // console.log("utilisateur trouvé", found);
  if (found.length === 1) return true;
  else if (found.length === 0) return false;
}

function isProdInStock(id, qty) {
  const found = products.filter(prod => {
    return prod.id === id && prod.stock >= qty;
  });
  return found.length === 1;
}

function createOrder(uID, prodID, qty) {
  let dateOrder = new Date(); 
  // génerer la date actuelle
  orders.push({
    id: orders.length + 1,
    userID: uID,
    productID: prodID,
    quantity: qty,
    date: dateOrder.toLocaleDateString()
  });
}

function updateProductStock(prodID, qty) {
  // trouver le produit par son id
  const found = products.filter(p => p.id === prodID)[0];
  // décrementer le stock de la qty
  found.stock -= qty;
}

// coder une fonction qui ajoute un objet commande dans orders[]
// seulement si le produit est en stock et seulement si l'user existe
// retourne true si l'order est correctement inséré, sinon false
// bonus : mettre à le stock
function addOrder(uID, prodID, qty) {
  var orderStatus = false;
  // si userID correspond à un user valide
  // et prodID existe et prod est en stock
  // et si le stock de produit permet la qty demandée
  if (isUserValid(uID) && isProductValid(prodID) && isProdInStock(prodID, qty)) {
    // ajouter un nouvel object commande dans le tableau order
    createOrder(uID, prodID, qty);
    updateProductStock(prodID, qty);
    orderStatus = true;
  }
  // retourner true si l'ordre est ok, false sinon
  return orderStatus;
}

var isOrderSuccess;
// les lignes suivantes devraient retourner true
// isOrderSuccess = addOrder(10, 1, 1);
// isOrderSuccess = addOrder(30, 2, 2);
isOrderSuccess = addOrder(100, 4, 1);
isOrderSuccess = addOrder(100, 3, 1);

// les lignes suivantes devraient retourner false
// isOrderSuccess = addOrder(1, 2, 2); // car l'user n'existe pas
// isOrderSuccess = addOrder(30, 44, 2); // car le produit n'existe pas
// isOrderSuccess = addOrder(100, 1, 21); // car le stock n'est pas suffisant 








