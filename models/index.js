const { model } = require('mongoose')
const PostSchema = require('./post')
const CommentSchema = require('./comment')

const Post = model('Post', PostSchema)
const Comment = model('Comment', CommentSchema)

module.exports = {
  Post,
  Comment
}