const db = require('../db')
const { Post, Comment } = require('../models/index')

const createPost = async (req, res) => {
    try {
        const post = await new Post(req.body);
        await post.save()
        return res.status(201).json({ post });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        return res.status(200).json({ posts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body);
        await comment.save()
        return res.status(201).json({ workout });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllCommentsOfPost = async (req, res) => {
    try {

    } catch (error) {

    }
}

module.exports = {
    createPost,
    getAllPosts,
    createComment,
    getAllCommentsOfPost
}