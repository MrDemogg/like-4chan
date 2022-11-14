const multer = require('multer')
const nanoid = require('nanoid')

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, 'messages/')
  },
  filename(req, file, callback) {
    const date = new Date()
    const datetime = `${date.toLocaleDateString()}T${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
    callback(null, `${nanoid()}${datetime}`)
  }
})

const types = ['image/png', 'image/jpeg', 'image/jpg']

const fileName = (req, file, callback) => {
  if (types.includes(req.mimeType)) {
    callback(null, true)
  } else {
    callback('Выбранный файл не фото!', false)
  }
}

module.exports = multer({storage, fileName})