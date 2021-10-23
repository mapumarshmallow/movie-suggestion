
const express = require("express");
const router = express.Router();

const storageService = require("../services/storage");
const imageProcessingService = require("../services/image");
const upload = storageService.upload;

// ==================================================  
//   GET Requests go here
// ==================================================  


// ==================================================  
//   POST Requests go here
// ==================================================  
router.post("/api/test", (req, res, next) => {
  res.status(200).send("hello test")
})


module.exports = router;
