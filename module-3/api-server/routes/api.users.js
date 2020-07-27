const router = new require("express").Router();
const UserModel = require("./../models/User");

router.get("/", async (req, res, next) => {
  try {
    const users = await UserModel.find({}).limit(10);
    console.log("here");
    res.json(users);
  } catch (err) {
    next(err);
  }
});


module.exports = router;