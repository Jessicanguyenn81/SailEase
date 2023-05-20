const Goldenspoon = require('../../models/goldenspoon');

module.exports = {
  allGoldenspoons,
}

async function allGoldenspoons(req, res) {
  const goldenspoons = await Goldenspoon.find({});
  console.log(goldenspoons);
  res.json(goldenspoons);
}
