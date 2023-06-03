const mongoose = require("mongoose");

let modelSchema = mongoose.Schema({
  title: String,
  owner_id: String,
  cover_img: String,
  content: [],
});

let Model = mongoose.model("Article", modelSchema);
module.exports = Model;
