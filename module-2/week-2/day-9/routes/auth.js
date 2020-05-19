const express = require("express");
const router = new express.Router();
const bcrypt = require("bcrypt");
const userModel = require("./../models/User");
// uploader est un middleware, cad une fonction qui s'insère entre une requête http et une réponse http
const uploader = require("./../config/cloudinary");

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

/**
 * @see : https://www.youtube.com/watch?v=O6cmuiTBZVs
 */
router.post("/signup", uploader.single("avatar"), (req, res) => {
  const user = req.body;

  if (req.file) { // si un fichier a été uploadé
    user.avatar = req.file.secure_url; // on l'associe à user
  }
        
  if (!user.username || !user.password || !user.email) {
    // todo retourner un message d'erreur : remplir tous les champs requis + redirect
    req.flash("warning", "Merci de remplir tous les champs requis.");
    res.redirect("/signup");

  } else {
    userModel
      .findOne({ email: user.email })
      .then((dbRes) => {
        if (dbRes) {
          // todo retourner message d'erreur : email déjà pris + redirect
          req.flash("warning", "Désolé, cet email n'est pas disponible.");
          res.redirect("/signup");
        }
      })
      .catch((dbErr) => console.error(dbErr));

    // si le programme est lu jusqu'ici, on converti le mot de passe en chaîne cryptée
    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(user.password, salt);
    console.log("password crypté >>>", hashed);
    user.password = hashed; // on remplace le mot de passe "en clair" par sa version cryptée

    // finalement on insère le nouvel utilisateur en base de données
    userModel
      .create(user)
      .then((dbRes) => {
        req.flash("success", "Inscription validée !");
        res.redirect("/signin")
      })
      .catch((dbErr) => console.error(dbErr));
  }
});

module.exports = router;
