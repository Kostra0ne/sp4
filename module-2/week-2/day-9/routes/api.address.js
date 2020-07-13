const express = require("express");
const router = new express.Router();
const protectPrivateRoute = require("./../middlewares/protectPrivateRoute");
const userModel = require("./../models/User");

router.post("/address/create", protectPrivateRoute, (req, res, next) => {
  const newAddress = { ...req.body }; // les infos de l'adresse postée
  const idUser = req.session.currentUser._id; // l'id de l'user connecté
  console.log(newAddress);

  userModel
    .findByIdAndUpdate(
      idUser,
      {
        address: newAddress,
      },
      { new: true }
    )
    .then((updatedUser) => {
      req.session.currentUser = updatedUser;
      res.json(updatedUser);
    }) // on répond avec une chaîne formatée JSON
    .catch(next); // si erreur, on passe au middleware de gestion des erreurs
});

module.exports = router;
