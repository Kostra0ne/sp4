const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  avatar: {
    type: String,
    default: "https://cdn.onlinewebfonts.com/img_258083.png",
  },
  address: {
    city: String,
    country: String,
    streetName: String,
    streetNumber: Number,
    zipcode: String,
  },
  username: String,
  email: String,
  password: {
    min: 4,
    required: true,
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "editor", "user"],
    default: "user",
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
