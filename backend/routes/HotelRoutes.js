const express = require('express')
const HotelController = require('../controller/HotelController.js');
const router = express.Router();

router.post('/add-hotel',HotelController.add);
router.get('/list',HotelController.list);
router.get('/:id',HotelController.sub);
router.put('/:id',HotelController.edit);
router.delete('/:id',HotelController.delete);

module.exports = router;
