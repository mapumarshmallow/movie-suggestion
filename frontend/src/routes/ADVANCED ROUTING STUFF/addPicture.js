const express = require("express");
const router = express.Router();

const storageService = require("../../services").storage;

/*
==================================================
    The below code is some more advanced stuff 
==================================================
*/
router.get('/', function (req, res, next) {
  let stack = require("../api").stack.filter(r => r.route &&
    !r.route.path.includes(":")
    && r.route.path.length > 1
    && r.route.methods.post)
    .map(r => r.route.path.substr(5))

  res.render("addPictureIndex", { category: req.params.category, files: stack });
})

router.get('/:category', function (req, res, next) {
  res.render("addPicture", { category: req.params.category });
})

module.exports = router;