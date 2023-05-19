const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../../controllers/api/restaurants');

router.get('/', restaurantsCtrl.allRestaurants);

module.exports = router;