const Schema = require('mongoose').Schema;

const diningSchema = new Schema({
  name: { type: String, required: true },
  activity: {type: Schema.Types.ObjectId, ref: 'Activity'},
}, {
  timestamps: true
});

module.exports = diningSchema;
