const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goldenspoonSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    picture: {
      type: String
    },
    date: {
      type: Date
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Goldenspoon', goldenspoonSchema)
