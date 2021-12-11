const axios = require("axios")
const express = require("express");
const router = express.Router();
const fs = require("fs").promises

// ==================================================  
//   GET Requests go here
// ==================================================  
let currentPayload = {}

// Gets images from unsplash and lists them out for users to select
router.get("/results", (req, res, next) => {
  currentPayload.query = req.query.query
  let response = {}
  axios.get(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${req.query.query}`)
    .then(response => {
      images = response.data.results.map(image => image.urls.regular)
      res.status(200).render("results", { images: images })
    })

  // For local debugging
  // fs.readFile("./example_res.json", 'utf8').then((data) => {
  //   response = JSON.parse(data)
  //   images = response.results.map(image => image.urls.regular)
  //   res.status(200).render("results", { images: images })
  // })
})

// ==================================================  
//   POST Requests go here
// ==================================================  

// Takes the current selected images and uploads them to the datastore
router.post("/upload", (req, res, next) => {
  currentPayload.results = req.body.results

  console.log(currentPayload) // For responsive logging / visiblity

  axios.post(process.env.GFUNCTION_URL, currentPayload).then(res => {
    console.log(res.data) // To see the response
  })

  res.status(200).redirect("/")
})


module.exports = router;
