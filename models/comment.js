const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comments = new Schema(
  {
    Posts: { type: Schema.Types.ObjectId, ref: 'Posts' },
    comment: { type: String, required: true },
    name: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Comments