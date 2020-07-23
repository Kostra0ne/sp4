require("dotenv").config();
require("./../config/mongo");
const users = require("./../json/users-fake-db.json").users;
const UserModel = require("./../models/User");

(async function() {
  try {
    await UserModel.collection.drop();
    await UserModel.create(users);
  } catch (err) {
    console.error(err);
  }
}())
