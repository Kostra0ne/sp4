const express = require("express");
const router = new express.Router();
const userModel = require("./../models/User");

const currentUserID = "5ec2482de75a7c99188bb9bb"; // pour l'instant on écrit l'_id de l'user 'en dur'
// une fois le module de login réalisé, on utilisera l'_id stocké en session...

router.get("/profile", (req, res) => {
  // ici récupérer l'user en bdd avec la const currentUserID
  // et passez l'user récupéré à la vue
  res.render("profile", { user: {} });
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
  userModel.findById(req.params.id)
  .then((dbRes) => {
    console.log("find one user by id >>> ", dbRes);
    res.render("dashboard/form-edit-user", { user: dbRes });
  })
  .catch((dbErr) => console.error(dbErr));
  
});

router.post("/users/edit/:id", (req, res) => {
  // lire et mettre à jour un user en utilisant son id (req.params)
  userModel.findByIdAndUpdate(req.params.id, req.body)
  .then(dbRes => {
    console.log("edit one user >>>> ", dbRes);
    res.redirect("/dashboard/manage-users");
  })
  .catch(dbErr => console.log(dbErr))
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
