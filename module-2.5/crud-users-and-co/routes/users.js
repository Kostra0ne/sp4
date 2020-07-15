const express = require("express");
const router = express.Router();
const SimplonienModel = require("./../models/Simploniens");

// C.R.U.D

// toutes les méthodes des models mongoose retournent une Promise

// attention au préfixe, /simploniens => afficher tous les simploniens
router.get("/", async (req, res, next) => {
  // utilisation de la syntaxe asyc/await pour gérer la Promise
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/async_function
  try {
    res.render("allSimploniens", {
      title: "Les simploniens de la promo P4",
      simploniens: await SimplonienModel.find(),
    });
  } catch (dbErr) {
    next(dbErr);
  }
});

//  attention au préfixe, /simploniens/create => afficher le form pour ajouer un simplonien
router.get("/create", function (req, res, next) {
  res.render("createSimplonien");
});

router.get("/delete", async function (req, res, next) {
  try {
    await SimplonienModel.remove(); // supprime
    res.redirect("/simploniens");
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.render("oneSimplonien", {
      simplonien: await SimplonienModel.findById(req.params.id),
    });
  } catch (dbErr) {
    next(dbErr);
  }
});

router.get("/delete/:id", async (req, res, next) => {
  try {
    await SimplonienModel.findByIdAndRemove(req.params.id);
    res.redirect("/simploniens");
  } catch (err) {
    next(err);
  }
});

// attention au préfixe, post /simploniens/create pour traiter les données postées depuis le formulaire

router.post("/create", function (req, res, next) {
  // toutes les méthodes des models mongoose retournent une Promise
  SimplonienModel.create(req.body)
    .then((dbRes) => res.redirect("/simploniens"))
    .catch(next);
});

router.post("/:id", function (req, res, next) {
  // toutes les méthodes des models mongoose retournent une Promise
  SimplonienModel.findByIdAndUpdate(req.params.id, req.body)
    .then((dbRes) => res.redirect("/simploniens"))
    .catch(next);
});

module.exports = router;
