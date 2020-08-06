const router = new require("express").Router();
const UserModel = require("./../models/User");

router.get("/", async (req, res, next) => {
  try {
    const users = await UserModel.find({}).limit(100);
    console.log("here");
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});


module.exports = router;