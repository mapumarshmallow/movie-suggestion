const express = require("express");
const router = express.Router();

const DataService = require("../services/data")

router.get("/", function (req, res, next) {
  res.render("index");
})

router.get("/research", async function (req, res, next) {
  res.status(200).render("research", { responses: await DataService.getResponses() })
})

router.get("/research/:result", async function (req, res, next) {
  res.status(200).render("results", { images: await (await DataService.getResponse(req.params.result)).results, isResearch: true })
})

module.exports = router;