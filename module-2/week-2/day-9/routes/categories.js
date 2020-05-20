const express = require("express");
const router = new express.Router();
const categoryModel = require("./../models/Category");

router.get("/categories", (req, res) => {
  categoryModel
    .find()
    .then((categories) => {
      res.render("categories", { categories });
    })
    .catch((dbErr) => console.log(dbErr));
});

router.get("/categories/:id", async (req, res) => {
  try {
    const product = await categoryModel.findById(req.params.id);
    res.render("product", { product });
  } catch (dbErr) {
    console.error(dbErr);
  }
});

router.get("/dashboard/manage-categories", (req, res) => {
  categoryModel
    .find()
    .then((categories) => {
      res.render("dashboard/manage-categories", { categories });
    })
    .catch((dbErr) => console.log(dbErr));
});

router.get("/dashboard/create-category", (req, res) => {
  res.render("dashboard/form-create-category");
});

router.get("/dashboard/category/edit/:id", (req, res) => {
  categoryModel
    .findById(req.params.id)
    .then((category) => {
      res.render("dashboard/form-edit-category", {
        category,
      });
    })
    .catch((dbErr) => console.error(dbErr));
});

router.post("/category", (req, res) => {
  categoryModel
    .create(req.body)
    .then((dbRes) => {
      res.redirect("/dashboard/manage-categories");
    })
    .catch((dbErr) => console.error(dbErr));
});

router.post("/category/delete/:id", (req, res) => {
  categoryModel
    .findByIdAndDelete(req.params.id)
    .then((dbRes) => {
      res.redirect("/dashboard/manage-categories");
    })
    .catch((dbErr) => console.error(dbErr));
});

router.post("/category/edit/:id", (req, res) => {
  categoryModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((dbRes) => res.redirect("/dashboard/manage-categories"))
    .catch((dbErr) => console.error(dbErr));
});

module.exports = router;
