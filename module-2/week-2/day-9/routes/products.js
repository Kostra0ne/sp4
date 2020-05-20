const express = require("express");
const router = new express.Router();
const productModel = require("./../models/Product");
const categoryModel = require("./../models/Category");
const protectAdminRoute = require("./../middlewares/protectAdminRoute");

// créer un router spécifique pour les tâches liées aux produits

router.get("/products", (req, res, next) => {
  productModel // productModel nous permet d'intéragir avec la collection product
    .find() // find() : récupère tous les documents de cette collection
    .populate("category")
    .then((dbRes) => {
      console.log(" tous les products >>>", dbRes);
      // toutes les requête de DB mongoose sont asynchrones et retournent une promesse
      // donc on attend le résultat avant de générer (render) la vue
      res.render("products", { products: dbRes }); // on envoit le tableaux de produits à la vue pour les afficher !
    })
    .catch(next);
});

// ci-dessous, on tire partie d'une feature assez récente de js (async/await)
router.get("/products/:id", async (req, res, next) => {
  // le callback est "décoré" du mot-clé async
  try {
    const product = await productModel.findById(req.params.id);
    // ci-dessus, on attend (await) le resultat d'une action asynchrone
    res.render("product", { product });
  } catch (dbErr) {
    next(dbErr);
  }
});

router.get(
  "/dashboard/manage-products",
  protectAdminRoute,
  (req, res, next) => {
    productModel
      .find()
      .then((dbRes) =>
        res.render("dashboard/manage-products", { products: dbRes })
      )
      .catch(next);
  }
);

router.get("/dashboard/create-product", protectAdminRoute, (req, res, next) => {
  categoryModel
    .find()
    .then((categories) =>
      res.render("dashboard/form-create-product", { categories })
    )
    .catch(next);
});

// version longue avec des then imbriqués
// router.get("/dashboard/product/edit/:id", protectAdminRoute, (req, res, next) => {
//     productModel
//       .findById(req.params.id)
//       .then((product) => {
//         categoryModel.find()
//         .then((categories) => {
//           res.render("dashboard/form-edit-product", {
//             product,
//             categories,
//           });
//         });
//       })
//       .catch(next);
//   }
// );

// solution plus compacte avec Promise.all
router.get("/dashboard/product/edit/:id", protectAdminRoute, (req, res, next) => {
  // promise.all va attendre la résolution de toutes les promesses passées en argument
  Promise.all([productModel.findById(req.params.id), categoryModel.find()])
  .then(dbResponses => {
    // les réponses sont fournies dans un Array dans le même ordre que l'Array fournit en argument du Promise.all()
    res.render("dashboard/form-edit-product", {
      product: dbResponses[0], // on accède donc au résultat avec les indices du tableau initial
      categories: dbResponses[1], 
    });
  })
  .catch(next); // toutes les promesses doivent être tenues, sinon le catch sera déclenché
});

router.post("/product", (req, res, next) => {
  productModel
    .create(req.body)
    .then((dbRes) => {
      console.log("produit ajouté en bdd >>> ", dbRes);
      res.redirect("/dashboard/manage-products");
    })
    .catch(next);
});

// ci-dessous :id est un route parameter
// quand dans une route vous utilisez :chose ou :truc
// :nomvar représente une sorte de variable...
// l'id d'u produit peut varier ... donc on utilsera
// ce segment pour cibler le bon document en bdd
router.post("/product/delete/:id", (req, res, next) => {
  console.log(req.params); // un objet ...
  console.log(req.params.id); // accéde à :id présent dans la route
  console.log(req.params.foo); // undefined car par définit dans la route

  productModel
    .findByIdAndDelete(req.params.id)
    .then((dbRes) => res.redirect("/dashboard/manage-products"))
    .catch(next);
});

router.post("/product/edit/:id", (req, res, next) => {
  productModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((dbRes) => res.redirect("/dashboard/manage-products"))
    .catch(next);
});

module.exports = router;
