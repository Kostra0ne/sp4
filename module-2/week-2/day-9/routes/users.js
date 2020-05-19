const express = require("express");
const router = new express.Router();
const userModel = require("./../models/User");
const bcrypt = require("bcrypt");

const currentUserID = "5ec3aaa1dda5ba14c2c72fe8";
// pour l'instant on écrit l'_id de l'user 'en dur'
// une fois le module de login réalisé, on utilisera l'_id stocké en session...

router.get("/profile", (req, res) => {
  // ici récupérer l'user en bdd avec la const currentUserID
  // et passez l'user récupéré à la vue
  userModel
    .findById(currentUserID)
    .then((dbRes) => {
      // console.log(dbRes);
      res.render("profile", { user: dbRes });
    })
    .catch((dbErr) => console.error(dbErr));
});

router.post("/profile/edit/:id", (req, res) => {
  const updatedUserInfos = req.body; // on stocke les infos postées dans cette constante
  if (
    // on vérifie la présence de tous les champs requis
    !updatedUserInfos.username ||
    !updatedUserInfos.email ||
    !updatedUserInfos.oldPassword ||
    !updatedUserInfos.password
  ) {
    // todo => return message erreur
  }
  
  userModel // on cherche l'user par son id
    .findById(req.params.id) // pour pouvoir comparer l'ancien pot de passe
    .then((user) => {
      // si la promesse est tenue, on vérifie que oldPassword est correct
      const checkOldPassword = bcrypt.compareSync(
        updatedUserInfos.oldPassword, // password provenant du form "texte plein"
        user.password // password stocké en bdd (encrypté)
      ); // compareSync retourne true || false

      if (checkOldPassword === false) { // si le oldPassword renseigné n'est pas le bon
        // todo => return message erreur
      } else {
        // si oldPassword renseigné est correct
        const salt = bcrypt.genSaltSync(10); // on génère un sel pour renforcer le hashage
        const hashed = bcrypt.hashSync(updatedUserInfos.password, salt); // encrypte nouveau password
        
        user.password = hashed; // on remplace le mot de passe "en clair" par le hash
        user.username = updatedUserInfos.username;
        user.email = updatedUserInfos.email;
        user.save(); // et enfin on update le document user récupéré de la bdd avec les nouvelles infos
        res.redirect("/profile");
      }
    })
    .catch((dbErr) => console.error(dbErr));
});

router.get("/dashboard/manage-users", (req, res) => {
  // à vous de jouer sur le même principe qu'avec les products....
  // lire tous les users en db, puis render une vue avec une table qui liste tous les users
  userModel
    .find()
    .then((dbRes) => {
      console.log("find all users >>> ", dbRes);
      res.render("dashboard/manage-users", { users: dbRes });
    })
    .catch((dbErr) => console.error(dbErr));
});

router.get("/dashboard/users/edit/:id", (req, res) => {
  // récupère un user par id puis render un formulaire d'édition
  // ce form ne permet d'éditer que le role de l'user (admin, editor, user)
  userModel
    .findById(req.params.id)
    .then((dbRes) => {
      console.log("find one user by id >>> ", dbRes);
      res.render("dashboard/form-edit-user", { user: dbRes });
    })
    .catch((dbErr) => console.error(dbErr));
});

router.post("/users/edit/:id", (req, res) => {
  // lire et mettre à jour un user en utilisant son id (req.params)
  userModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((dbRes) => {
      console.log("edit one user >>>> ", dbRes);
      res.redirect("/dashboard/manage-users");
    })
    .catch((dbErr) => console.log(dbErr));
});

router.post("/users/delete/:id", (req, res) => {
  // supprime un user par son id  (req.params)
  // puis redirige vers le manager users
  userModel
    .findByIdAndDelete(req.params.id)
    .then((dbRes) => {
      console.log("delete one users >>> ", dbRes);
      res.redirect("/dashboard/manage-users");
    })
    .catch((dbErr) => console.error(dbErr));
});

module.exports = router;
