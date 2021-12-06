const axios = require("axios")
const express = require("express");
const router = express.Router();
const fs = require("fs").promises

// ==================================================  
//   GET Requests go here
// ==================================================  
const UNSPLASH_KEY = "UjzM_zYBSd3fk4QSxEgSY3qsxOACzvqkVzExqctMh2k"

router.get("/results", (req, res, next) => {
  // axios.get(`https://api.unsplash.com/search/photos?client_id=${UNSPLASH_KEY}&query=${req.params.query}`)
  //   .then(res => fs.writeFile("./example_res.json", JSON.stringify(res.data), err => {
  //     if (err) {
  //       console.log(err)
  //       return
  //     }
  //   }))
  let response = {}
  fs.readFile("./example_res.json", 'utf8').then((data) => {
    response = JSON.parse(data)
    console.log(response)
    res.status(200).render("success")
  })
})

// ==================================================  
//   POST Requests go here
// ==================================================  
router.post("/api/test", (req, res, next) => {
  res.status(200).send("hello test")
})


module.exports = router;
