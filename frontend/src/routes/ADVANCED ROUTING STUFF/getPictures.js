const express = require("express");
const fs = require('fs');
const router = express.Router();

const storageService = require('../../services/storage');

/*
==================================================
    The below code is some more advanced stuff 
==================================================
*/
router.get("/:category", function (req, res, next) {
  storageService.getPictures(req.params.category).then(p => {
    res.render("pictures", { category: req.params.category, pics: p });
    next();
  }).catch(e => {
    res.render("pictures", { category: req.params.category });
    next();
  })
})

router.get("/", function (req, res, next) {
  storageService.getCategories().then(f => {
    res.render("picturesIndex", { files: f });
  });
})

module.exports = router;