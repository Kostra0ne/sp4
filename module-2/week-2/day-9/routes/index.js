const express = require("express");
const router = express.Router();

// dans ce routeur, on mettre les routes génériques
// de notre shop, ex: about, contact, CGV, etc...
// n'ayant pas besoin de modele

/* GET home page. */
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard/dashboard");
});



module.exports = router;
