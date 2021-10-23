const express = require("express");
const multer = require('multer');

async function startServer() {
  const app = express()
  const port = process.env.PORT || 3000;

  await require("./loaders").default(app);

  const server = app.listen(port, function () {
    console.log("Listening on http://localhost:" + port);
  });
}

startServer();
