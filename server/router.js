const { Router } = require('express')
const upload = require('./multerMiddleware')
const fsHandler = require("./fsHandler");
const router = Router()

router.post('/uploads', upload.single('image'), (req, res) => {
  if (req.body.message) {
    const post = {
      author: req.body.author ? req.body.author : undefined,
      message: req.body.message,
      imagePath: req.file ? req.file.filename : undefined
    }
    fsHandler.createPost(post, res)
  } else {
    res.status(400).send('Поле "message" обязательно')
  }
});

router.get('/uploads', (_, res) => {
  fsHandler.getPosts(res)
})


module.exports = router