const { Router } = require('express')
const middleware = require('./multerMiddleware')
const router = Router()

router.post('/upload', middleware.single('image'),(req, res) => {
  try {
    if (req.file) {
      res.json(req.file)
    }
  } catch (e) {
    res.send(e.message)
  }
})

module.exports = router