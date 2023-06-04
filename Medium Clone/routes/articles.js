const express = require("express");
let router = express.Router();
let Article = require("../models/Article");

let sessionAuth = require("../middlewares/sessionAuth");

router.get("/write", sessionAuth, (req, res) => {
  res.render("articles/write");
});

module.exports = router;
