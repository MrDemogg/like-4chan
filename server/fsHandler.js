const fs = require('fs')
const {v4} = require('uuid')

const fsHandler = {
  createPost: (post, res) => {
    fs.writeFile(`./server/uploads/posts/${v4()}${post.author ? post.author : new Date().toLocaleDateString()}.json`,
      JSON.stringify(post),
      (err) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).send('success')
      }
    })
  }
}

module.exports = fsHandler