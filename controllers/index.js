const { Posts } = require('../models')
const { Comments } = require('../models')

const getPostDetails = async (req, res) => {
  try {
    const posts = await Posts.find()
    return res.status(200).json({ posts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createPostDetails = async (req, res) => {
  try {
    const posts = await new Posts(req.body)
    await posts.save()
    return 'test'
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getComments = async (req, res) => {
  try {
    let comments = await Comments.find()
    return res.status(200).json(comments)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCommentsByPost = async (req, res) => {
  try {
    let comments = await Comments.find({ Posts: req.params.id }).exec()
    return res.status(201).json(comments)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createCommentPost = async (req, res) => {
  try {
    const comment = await new Comments(req.body)
    await comment.save()
    return res.status(200).json(comment)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getPostDetails,
  createPostDetails,
  getComments,
  createCommentPost,
  getCommentsByPost
}