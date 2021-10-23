const multer = require("multer");
const path = require('path');
const fs = require('fs-extra');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/public/uploads/temp')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

exports.upload = multer({ storage: storage });

exports.processUploads = function (dirName, req) {
  const dir = dirName;
  const filename = req.file.filename;
  fs.move(`src/public/uploads/temp/${filename}`, `src/public/uploads/images/${dir}/${filename}`);
}

exports.getCategories = function () {
  return fs.promises.readdir('src/public/uploads/images');
}

exports.getPictures = function (category) {
  return fs.promises.readdir('src/public/uploads/images/' + category);
}
