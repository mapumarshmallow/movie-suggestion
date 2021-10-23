const expressLoader = require("./express");
const viewLoader = require("./views");

module.exports.default = async function (expressApp) {
  await expressLoader(expressApp);
  await viewLoader(expressApp);
}