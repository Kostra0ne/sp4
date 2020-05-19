const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  parentCategory: {
    type: Schema.Types.ObjectId,
    default: null,
  },
});

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;
