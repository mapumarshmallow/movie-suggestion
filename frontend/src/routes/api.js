const axios = require("axios")
const express = require("express");
const router = express.Router();
const fs = require("fs").promises

// ==================================================  
//   GET Requests go here
// ==================================================  
const UNSPLASH_KEY = "UjzM_zYBSd3fk4QSxEgSY3qsxOACzvqkVzExqctMh2k"
let currentPayload = {}

router.get("/results", (req, res, next) => {
  currentPayload.query = req.query.query
  let response = {}
  axios.get(`https://api.unsplash.com/search/photos?client_id=${UNSPLASH_KEY}&query=${req.query.query}`)
    .then(response => {
      images = response.data.results.map(image => image.urls.regular)
      res.status(200).render("results", { images: images })
    })

  // fs.readFile("./example_res.json", 'utf8').then((data) => {
  //   response = JSON.parse(data)
  //   images = response.results.map(image => image.urls.regular)
  //   res.status(200).render("results", { images: images })
  // })
})

// ==================================================  
//   POST Requests go here
// ==================================================  
router.post("/api/test", (req, res, next) => {
  res.status(200).send("hello test")
})

router.post("/upload", (req, res, next) => {
  currentPayload.results = req.body.results

  console.log(currentPayload)

  axios.post('https://us-central1-scenic-style-329702.cloudfunctions.net/append-pics-firestore', currentPayload).then(res => {
    console.log(res.data)
  })

  res.status(200).redirect("/")
})


module.exports = router;
