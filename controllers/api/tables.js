const Table = require('../../models/table');

module.exports = {
  allTables,
}

async function allTables(req, res) {
  const tables = await Table.find({});
  console.log("tables", tables);
  res.json(tables);
}
