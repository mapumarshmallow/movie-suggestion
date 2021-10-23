const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index");
})

router.get("/success", function (req, res, next) {
  res.render("success");
})

module.exports = router;