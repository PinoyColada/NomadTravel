const express = require('express')
const cors = require('cors')
const postController = require('./controller/PostController')
const db = require('./db')
const logger = require('morgan')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))

//routes
app.get('/', postController.getPostDetails)
app.post('/post', postController.createPostDetails)
app.post('/comments/new', postController.createCommentPost)
app.get('/comments', postController.getComments)
app.get('/posts/:id/comments', postController.getCommentsByPost)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))