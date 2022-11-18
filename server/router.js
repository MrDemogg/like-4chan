const { Router } = require('express')
const upload = require('./multerMiddleware')
const router = Router()

router.post('/upload', upload.single('image'), (req, res) => {
  const product = req.body;
  console.log(product)
  if (req.file) {
    console.log(req.file)
  }
});


module.exports = router