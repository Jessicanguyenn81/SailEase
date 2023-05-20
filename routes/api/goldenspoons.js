const express = require('express');
const router = express.Router();
const goldenspoonsCtrl = require('../../controllers/api/goldenspoons');

router.get('/', goldenspoonsCtrl.allGoldenspoons);

module.exports = router;