const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true},
    description: { type: String, required: true },
    post_id: { type: Schema.Types.ObjectId, ref: 'post_id' }
  },
  { timestamps: true }
)

module.exports = Comment