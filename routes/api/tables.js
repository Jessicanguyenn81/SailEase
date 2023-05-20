const express = require('express');
const router = express.Router();
const tablesCtrl = require('../../controllers/api/tables');

router.get('/', tablesCtrl.allTables);

module.exports = router;