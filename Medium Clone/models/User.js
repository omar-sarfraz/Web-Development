const mongoose = require("mongoose");

let modelSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

let Model = mongoose.model("User", modelSchema);
module.exports = Model;
