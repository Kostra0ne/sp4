const express = require("express");
const router = new express.Router();
const categoryModel = require("./../models/Category");
const protectAdminRouteMiddleware = require("./../middlewares/protectAdminRoute");

router.get("/categories", (req, res, next) => {
  categoryModel
    .find()
    .then((categories) => {
      res.render("categories", { categories });
    })
    .catch(next);
});

router.get("/categories/:id", async (req, res, next) => {
  try {
    const product = await categoryModel.findById(req.params.id);
    res.render("product", { product });
  } catch (dbErr) {
    next(dbErr);
  }
});

router.get("/dashboard/manage-categories", protectAdminRouteMiddleware, (req, res, next) => {
  categoryModel
    .find()
    .then((categories) => res.render("dashboard/manage-categories", { categories }))
    .catch(next);
});

router.get("/dashboard/create-category", protectAdminRouteMiddleware, (req, res) => {
  res.render("dashboard/form-create-category");
});

router.get("/dashboard/category/edit/:id", protectAdminRouteMiddleware, (req, res, next) => {
  categoryModel
    .findById(req.params.id)
    .then((category) => res.render("dashboard/form-edit-category", {category}))
    .catch(next);
});

router.post("/category", (req, res, next) => {
  categoryModel
    .create(req.body)
    .then((dbRes) => res.redirect("/dashboard/manage-categories"))
    .catch(next);
});

router.post("/category/delete/:id", (req, res, next) => {
  categoryModel
    .findByIdAndDelete(req.params.id)
    .then((dbRes) => res.redirect("/dashboard/manage-categories"))
    .catch(next);
});

router.post("/category/edit/:id", (req, res, next) => {
  categoryModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((dbRes) => res.redirect("/dashboard/manage-categories"))
    .catch(next);
});

module.exports = router;
