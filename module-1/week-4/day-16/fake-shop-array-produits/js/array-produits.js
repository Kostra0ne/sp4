// Utiliser le DOM pour réaliser la tâche suivante
// -- préparer une liste (array) de produits (objects) dans votre programme JS
// -- afficher les produits dans le HTML depuis une fonction JS
// -- bonus: chaque produit est une instance de classe Product

const products = [
  {
    name: "Smartphone Google Pixel",
    price: 380,
    currency: "euros"
  },
  {
    name: "Foo",
    price: 1,
    currency: "dollars"
  },
  {
    name: "Bar",
    price: 2,
    currency: "euros"
  },
  {
    name: "Baz",
    price: 3,
    currency: "euros"
  },
  {
    name: "Smart Watch Android",
    price: 450,
    currency: "euros"
  }
];

function appendProductList(products) {
  const productsList = document.getElementById("products"); // le ul
  productsList.innerHTML = ""; // reset contenu pour éviter doublon
  products.forEach(prod => {
    // parcourir tous les produits
    // puis écrire le template html pour chaque produit dans le ul
    productsList.innerHTML += `<li class="item product">
          <div class="infos">
              <h3 class="name">${prod.name}</h3>
              <b class="price">${prod.price} ${prod.currency}</b>
          </div>
          <span class="shopcart-add-icon">
              <i class="fas fa-cart-plus"></i>
          </span>
      </li>`;
  });
}

function appendAvecAppendChild(products) {
  const productsList = document.getElementById("products");
  products.innerHTML += "";

  products.forEach(product => {
    const li = document.createElement("li");
    li.className = "item product";
    const div = document.createElement("div");
    div.className = "infos";
    const h3 = document.createElement("h3");
    h3.className = "name";
    h3.textContent = product.name;
    const b = document.createElement("b");
    b.className = "price";
    b.textContent = `${product.price} ${product.currency}`;
    const span = document.createElement("span");
    span.className = "shopcart-add-icon";
    const i = document.createElement("i");
    i.className = "fas fa-cart-plus";

    div.appendChild(h3);
    div.appendChild(b);
    span.appendChild(i);
    li.appendChild(div);
    li.appendChild(span);
    productsList.appendChild(li);
  });
}

appendProductList(products);

/*
 *  BONUS
 *  cette version utilise la classe Product
 *
 */

class Product {
  constructor(n, p, c) {
    this.name = n;
    this.price = p;
    this.currency = c;
  }

  getTemplate() {
    return `<li class="item product">
        <div class="infos">
            <h3 class="name">${this.name}</h3>
            <b class="price">${this.price} ${this.currency}</b>
        </div>
        <span class="shopcart-add-icon">
            <i class="fas fa-cart-plus"></i>
        </span>
    </li>`;
  }
}

const products2 = [
  new Product("foo", 1, "euros"),
  new Product("bar", 10, "dollars"),
  new Product("baz", 100, "yens")
];

function appendProductList2(products) {
  const productsList = document.getElementById("products");
  productsList.innerHTML = ""; // reset contenu pour éviter doublon
  products.forEach(prod => {
    // parcourir tous les produits
    // puis écrire le template html pour chaque produit dans le ul
    productsList.innerHTML += prod.getTemplate();
  });
}

// appendProductList2(products2);
