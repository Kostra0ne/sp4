// ici on va connecter notre application back à la bdd
// https://mongoosejs.com/

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/intro", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", () => {
  console.error("NAY : database connection failed !!!");
});

mongoose.connection.on("connected", () => {
  console.log("YAY : Database connected !!!");
});
