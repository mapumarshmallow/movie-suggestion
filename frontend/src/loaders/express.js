const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const cors = require("cors");
const routes = require("../routes");

module.exports = function (app) {
  app.use("/", express.static("src/public"));

  app.use(bodyParser.json());
  app.use(cors({
    origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
  }))

  app.use("/add", routes.addPictures);
  app.use("/", routes.api);
}