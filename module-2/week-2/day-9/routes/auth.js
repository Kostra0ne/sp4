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
router.post("/signin", uploader.single("avatar"), (req, res) => {
  console.log("ficher uploadé ???", req.file);
  const user = req.body;

  if (req.file) {
    user.avatar = req.file.secure_url;
  }

  if (!user.username || !user.password || !user.email) {
    // todo retourner un message d'erreur : remplir tous les champs requis + redirect
  } else {
    userModel
      .findOne({ email: user.email })
      .then((dbRes) => {
        if (dbRes) {
          console.log("utilisateur existant ? >>>", dbRes);
          // todo retourner message d'erreur : email déjà pris + redirect
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
      .then((dbRes) => res.redirect("/signin"))
      .catch((dbErr) => console.error(dbErr));
  }
});

module.exports = router;
