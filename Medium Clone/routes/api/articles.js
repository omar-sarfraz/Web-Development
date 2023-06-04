const express = require("express");
const Article = require("../../models/Article");
const multer = require("multer");
const sessionAuth = require("../../middlewares/sessionAuth");

const fs = require("fs");

const upload = multer({ dest: "uploads/" });

let router = express.Router();

router.post("/api/articles", sessionAuth, upload.single("image"), async function (req, res) {
  // console.log(req.body, req.file);

  let image = fs.readFileSync(req.file.path, "base64");

  let owner_id = req.session.user._id;
  let article = { ...req.body, owner_id, cover_img: image };

  let record = new Article(article);
  await record.save();

  req.setFlash("Success", "Article Published Successfully");
  res.redirect("back");
});

router.put("/api/articles/:id", async function (req, res) {
  //   return res.send(req.body);
  let record = await Article.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(record);
});

router.delete("/api/articles/:id", async function (req, res) {
  let record = await Article.findByIdAndDelete(req.params.id);
  res.send("Done");
});

router.get("/api/articles/:id", async function (req, res) {
  let record = await Article.findById(req.params.id);
  res.send(record);
});

router.get("/api/articles", async function (req, res) {
  let records = await Article.find();
  res.send(records);
});

module.exports = router;
