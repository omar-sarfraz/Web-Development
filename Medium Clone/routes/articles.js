const express = require("express");
let router = express.Router();
let Article = require("../models/Article");

router.get("/article", async (req, res) => {
  let deals = await Article.find();
  res.render("articles/index", {
    deals,
    pageTitle: "Top Deals Set From Router",
  });
});

module.exports = router;
