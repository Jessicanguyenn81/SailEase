const mongoose = require('mongoose')
const Schema = mongoose.Schema

const excursionSchema = new Schema(
  {
    name: { type: String, required: true },
    picture: { type: String },
    type: { type: String },
    date: { type: Date }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Excursion', excursionSchema)
