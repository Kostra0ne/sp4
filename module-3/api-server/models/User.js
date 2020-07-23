const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
