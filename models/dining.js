const mongoose = require('mongoose');
// Ensure the Activity model is processed by Mongoose (for populating activities queries)
require('./activity');
const diningSchema = require('./diningSchema');

module.exports = mongoose.model('Item', diningSchema);