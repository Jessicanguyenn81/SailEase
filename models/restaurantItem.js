const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantItemSchema = new Schema(
  {
    name: { type: String, required: true },
    picture: String,
    type: String,
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Restaurant', restaurantItemSchema)
