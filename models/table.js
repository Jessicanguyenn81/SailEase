const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tableSchema = new Schema(
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

module.exports = mongoose.model('Table', tableSchema)
