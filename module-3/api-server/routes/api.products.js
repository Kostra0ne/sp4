const router = new require("express").Router();
const ProductModel = require("./../models/Product");

router.get("/", async (req, res, next) => {
  try {
    const products = await ProductModel.find().limit(100);
    res.json(products);
  } catch (err) {
    next(err);
  }
});


module.exports = router;