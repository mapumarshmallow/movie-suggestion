const express = require("express");
const router = express.Router();

const DataService = require("../services/data")

router.get("/", function (req, res, next) {
  res.render("index");
})

// View all of the search queries
router.get("/research", async function (req, res, next) {
  res.status(200).render("research", { responses: await DataService.getResponses() })
})

// View a specific result and its selected images
router.get("/research/:result", async function (req, res, next) {
  res.status(200).render("results", { images: await (await DataService.getResponse(req.params.result)).results, isResearch: true })
})

module.exports = router;