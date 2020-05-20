const express = require("express");
const router = new express.Router();
const productModel = require("./../models/Product");
const protectAdminRoute = require("./../middlewares/protectAdminRoute");

// créer un router spécifique pour les tâches liées aux produits

router.get("/products", (req, res) => {
  productModel // productModel nous permet d'intéragir avec la collection product
    .find() // find() : récupère tous les documents de cette collection
    .then((dbRes) => {
      // toutes les requête de DB mongoose sont asynchrones
      // donc on attend le résultat avant de render la vue
      res.render("products", { products: dbRes }); // on envoit le tableaux de produits à la vue pour les afficher !
    })
    .catch((dbErr) => console.log(dbErr));
});

// ci-dessous, on tire partie d'une feature assez récente de js (async/await)
router.get("/products/:id", async (req, res) => { // le callback est "décoré" du mot-clé async
  try {
    const product = await productModel.findById(req.params.id); 
    // ci-dessus, on attend (await) le resultat d'une action asynchrone
    res.render("product", { product });
  } catch (dbErr) {
    console.error(dbErr);
  }
});

router.get("/dashboard/manage-products", protectAdminRoute, (req, res) => {
  productModel
    .find()
    .then((dbRes) => {
      res.render("dashboard/manage-products", { products: dbRes });
    })
    .catch((dbErr) => console.log(dbErr));
});

router.get("/dashboard/create-product", protectAdminRoute, (req, res) => {
  res.render("dashboard/form-create-product");
});

router.get("/dashboard/product/edit/:id", protectAdminRoute, (req, res) => {
  productModel
    .findById(req.params.id)
    .then((dbRes) => {
      res.render("dashboard/form-edit-product", {
        product: dbRes,
      });
    })
    .catch((dbErr) => console.error(dbErr));
});

router.post("/product", (req, res) => {
  productModel
    .create(req.body)
    .then((dbRes) => {
      console.log("produit ajouté en bdd >>> ", dbRes);
      res.redirect("/dashboard/manage-products");
    })
    .catch((dbErr) => console.error(dbErr));
});

// ci-dessous :id est un route parameter
// quand dans une route vous utilisez :chose ou :truc
// :nomvar représente une sorte de variable...
// l'id d'u produit peut varier ... donc on utilsera
// ce segment pour cibler le bon document en bdd
router.post("/product/delete/:id", (req, res) => {
  console.log(req.params); // un objet ...
  console.log(req.params.id); // accéde à :id présent dans la route
  console.log(req.params.foo); // undefined car par définit dans la route

  productModel
    .findByIdAndDelete(req.params.id)
    .then((dbRes) => {
      res.redirect("/dashboard/manage-products");
    })
    .catch((dbErr) => console.error(dbErr));
});

router.post("/product/edit/:id", (req, res) => {
  productModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((dbRes) => res.redirect("/dashboard/manage-products"))
    .catch((dbErr) => console.error(dbErr));
});

module.exports = router;
