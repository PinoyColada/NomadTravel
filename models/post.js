const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Post = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: Number, required: true},
  },
  { timestamps: true }
)

module.exports = Post