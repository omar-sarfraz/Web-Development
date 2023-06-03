const express = require("express");
let app = express();
var expressLayouts = require("express-ejs-layouts");
app.use(express.json());
app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", require("./routes/api/articles"));
app.use("/", require("./routes/articles"));

app.get("/login", (req, res) => {
  res.render("auth/login", {});
});

app.get("/", (req, res) => {
  res.render("homepage");
});

app.listen(3000, () => {
  console.log("Server Started on port 3000");
});
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/", { useNewUrlParser: true })
  .then(() => console.log("Connected to Mongo ...."))
  .catch((error) => console.log(error.message));
