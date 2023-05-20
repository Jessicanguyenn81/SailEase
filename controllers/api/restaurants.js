const Restaurant = require('../../models/restaurant');

module.exports = {
  allRestaurants,
}

async function allRestaurants(req, res) {
  const restaurants = await Restaurant.find({});
  console.log("restaurants", restaurants);
  res.json(restaurants);
}
