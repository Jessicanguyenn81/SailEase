const restaurant = require('../../models/restaurant');
const Restaurant = require('../../models/restaurant');

module.exports = {
  allRestaurants,
}

async function allRestaurants(req, res) {
  const excursions = await Restaurant.find({});
  console.log(restaurants);
  res.json(restaurants);
}
