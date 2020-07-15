var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const images1 = [
    "code-1.jpg",
    "code-2.jpg",
    "code-3.jpg"
  ];
  const images2 = [
    "coders-1.jpg",
    "coder-2.jpg",
    "coder-3.jpg"
  ];
  res.render("index", { title: "Accueil", images1, images2 });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "A propos de cette appli" });
});

module.exports = router;
