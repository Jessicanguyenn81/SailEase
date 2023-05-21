const Excursion = require('../../models/excursion');

module.exports = {
  allExcursions,
}

async function allExcursions(req, res) {
  const excursions = await Excursion.find({});
  // console.log(excursions);
  res.json(excursions);
}
