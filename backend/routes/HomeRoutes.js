const express = require('express')
const HomeController = require('../controller/HomeController.js');
const router = express.Router();


router.get('/home',HomeController.home);
router.get('/hotel',HomeController.hotel);

module.exports = router;