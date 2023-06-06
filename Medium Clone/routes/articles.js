const express = require("express");
const multer = require("multer");
const fs = require("fs");

let router = express.Router();

let Article = require("../models/Article");

const upload = multer({ dest: "uploads/" });

let sessionAuth = require("../middlewares/sessionAuth");

router.get("/write", sessionAuth, (req, res) => {
  res.render("articles/write");
});

router.post("/articles", sessionAuth, upload.single("image"), async function (req, res) {
  // console.log(req.body, req.file);

  let image = fs.readFileSync(req.file.path, "base64");

  let owner_id = req.session.user._id;
  let article = { ...req.body, owner_id, cover_img: image };

  let record = new Article(article);
  await record.save();

  req.setFlash("Success", "Article Published Successfully");
  res.redirect("back");
});

router.get("/article/:id", async (req, res) => {
  let article = await Article.findById(req.params.id).populate("owner_id");

  // console.log(article);

  res.render("articles/article", { article });
});

router.get("/article/delete/:id", sessionAuth, async (req, res) => {
  let article = await Article.findById(req.params.id);
  let owner = article.owner_id;

  // console.log("Onwer is", owner);

  if (req.session.user._id === owner.toString()) {
    await Article.findByIdAndDelete(req.params.id);
    req.setFlash("Success", "Article Deleted Successfully");
    return res.redirect(`/profile/${req.session.user._id}`);
  } else {
    req.setFlash("Error", "Only Owner can delete the article");
    return res.redirect("back");
  }
});

router.get("/article/edit/:id", sessionAuth, async (req, res) => {
  let article = await Article.findById(req.params.id);
  let owner = article.owner_id;

  if (req.session.user._id === owner.toString()) {
    return res.render("articles/edit", { article });
  } else {
    req.setFlash("Error", "Only Owner can edit the article");
    return res.redirect("back");
  }
});

router.post("/article/edit/:id", sessionAuth, upload.single("image"), async (req, res) => {
  let article = await Article.findById(req.params.id);
  let owner = article.owner_id;

  let articleObj = req.body;

  if (req.session.user._id === owner.toString()) {
    // console.log(req.file);
    if (req.file) {
      let image = fs.readFileSync(req.file.path, "base64");
      articleObj.cover_img = image;
    }

    let record = await Article.findByIdAndUpdate(req.params.id, articleObj, {
      new: true,
    });

    let isEqual = record.title === article.title && record.cover_img === article.cover_img && record.article === article.article;

    // console.log("Equal", isEqual);
    if (!isEqual) {
      req.setFlash("Success", "Article Updated Successfully");
      return res.redirect("/article/" + record._id);
    } else {
      res.redirect("back");
    }
  } else {
    req.setFlash("Error", "Only Owner can update the article");
    return res.redirect("back");
  }
});

module.exports = router;
