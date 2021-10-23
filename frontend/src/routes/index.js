const getPictures = require("./ADVANCED ROUTING STUFF/getPictures");
const addPictures = require("./ADVANCED ROUTING STUFF/addPicture");
const home = require("./ADVANCED ROUTING STUFF/home");
const api = require("./api");

module.exports = {
  home: home,
  getPictures: getPictures,
  addPictures: addPictures,
  api: api
}