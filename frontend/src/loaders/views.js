const viewRoutes = require("../routes");

module.exports = function (app) {
  app.set("views", "src/views/");
  app.set("view engine", "pug");

  app.use("/", viewRoutes.home)
}