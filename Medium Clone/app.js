const express = require("express");
let app = express();
let expressLayouts = require("express-ejs-layouts");
let cookieParser = require("cookie-parser");
let session = require("express-session");
let Article = require("./models/Article");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(cookieParser());

app.use(
  session({
    secret: "My Top Secret String",
    cookie: { maxAge: 1800000 },
    resave: true,
    saveUninitialized: true,
  })
);

app.use(require("./middlewares/isAdmin"));
app.use(require("./middlewares/checkSession"));

app.get("/", async (req, res) => {
  let articles = await Article.find().populate("owner_id").limit(10);
  // console.log(articles[0]);
  res.render("homepage", { articles });
});

app.use("/", require("./routes/api/articles"));
app.use("/", require("./routes/articles"));
app.use("/", require("./routes/auth"));

app.listen(3000, () => {
  console.log("Server Started on port 3000");
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/medium_clone", { useNewUrlParser: true })
  .then(() => console.log("Connected to Mongo ...."))
  .catch((error) => console.log(error.message));
