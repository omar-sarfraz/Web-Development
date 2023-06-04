const express = require("express");
const Category = require("../../models/Category");
const sessionAuth = require("../../middlewares/sessionAuth");
const adminAuth = require("../../middlewares/adminAuth");

let router = express.Router();

router.post("/api/categories", sessionAuth, adminAuth, async function (req, res) {
  let category = req.body;

  let record = new Category(category);
  await record.save();

  req.setFlash("Success", "Category Added Successfully");
  res.redirect("back");
});

router.put("/api/categories/:id", sessionAuth, adminAuth, async function (req, res) {
  //   return res.send(req.body);
  let record = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(record);
});

router.delete("/api/categories/:id", sessionAuth, adminAuth, async function (req, res) {
  let record = await Category.findByIdAndDelete(req.params.id);
  res.send("Done");
});

router.get("/api/categories/:id", sessionAuth, adminAuth, async function (req, res) {
  let record = await Category.findById(req.params.id);
  res.send(record);
});

router.get("/api/categories", async function (req, res) {
  let records = await Category.find();
  res.send(records);
});

module.exports = router;
