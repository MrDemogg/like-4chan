const express = require('express')
const cors = require('cors')
const router = require('./router')
const path = require('path')

const app = express()
const port = 8000

app.use(cors())
app.use(express.json({ extended: true }))
app.use('/upload', express.static(path.join(__dirname, 'upload')))
app.use('', router)

app.listen(port, () => {
  console.log('Server started. Port: ' + port)
})