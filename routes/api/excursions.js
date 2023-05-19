const express = require('express');
const router = express.Router();
const excursionsCtrl = require('../../controllers/api/excursions');

router.get('/', excursionsCtrl.allExcursions);

module.exports = router;