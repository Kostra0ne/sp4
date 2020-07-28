const router = new require("express").Router();
const ProductModel = require("./../models/Product");

// /api/products/
router.get("/", async (req, res, next) => {
  try {
    const products = await ProductModel.find().limit(10);
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// /api/products/un-id-mongo
router.get("/:id", async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
