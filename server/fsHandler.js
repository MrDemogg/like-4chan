const fs = require('fs')
const {v4} = require('uuid')

const fsHandler = {
  createPost: (post, res) => {
    const postId = v4()
    fs.writeFile(`./server/uploads/posts/${postId}${post.author ? post.author : new Date().toLocaleDateString()}.json`,
      JSON.stringify({...post, id: postId}),
      (err) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).send('success')
      }
    })
  },
  getPosts: (res) => {
    try {
      const filesData = []
      fs.readdir('./server/uploads/posts', async (err, files) => {
        for (let i = 0; i < files.length; i++) {
          if (files[i] !== '.gitkeep') {
            const fileData = await JSON.parse(fs.readFileSync(`./server/uploads/posts/${files[i]}`).toString())
            filesData.push(fileData)
          }
        }
        res.status(200).send(filesData)
      })
    } catch (e) {
      res.status(500).send(e)
    }
  }
}

module.exports = fsHandler