const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const cors = require("cors");
const routes = require("../routes");
require('dotenv').config()

module.exports = function (app) {
  app.enable('trust proxy');

  app.use("/", express.static("src/public"));

  app.use(bodyParser.json());
  app.use(cors({
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  }))

  app.use("/", routes.api);
}