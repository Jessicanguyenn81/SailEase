const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    picture: { type: String },
    restaurantType: { type: String},
    sortOrder: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Restaurant', restaurantSchema);
