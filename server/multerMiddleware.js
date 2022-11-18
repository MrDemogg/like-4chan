const multer  = require('multer');
const path = require('path');
const config = require('./config');
const {v4} = require('uuid')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, v4() + path.extname(file.originalname));
  }
});

module.exports = multer({storage})