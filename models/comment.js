const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true},
    description: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Comment