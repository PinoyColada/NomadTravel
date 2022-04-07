const mongoose = require('mongoose')
const CommentsSchema = require('./Comments')
const PostsSchema = require('./Posts')

const Comments = mongoose.model('Comments', CommentsSchema)
const Posts = mongoose.model('Posts', PostsSchema)

module.exports = {
  Comments,
  Posts
}