const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const simplonienSchema = new Schema({
  name: String,
  email: String,
  favoriteLanguage: String,
});

const SimplonienModel = mongoose.model("Simploniens", simplonienSchema);


module.exports = SimplonienModel;