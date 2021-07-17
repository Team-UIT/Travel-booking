const express = require('express');
const UserController = require('../controller/UserController');
const router = express.Router();

router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.get('/:id',UserController.profile);
router.get('/list',UserController.list);
// router.put('/:id',UserController.update);
router.delete('/:id',UserController.delete);
// router.post('/createadmin',UserController.admin);


module.exports = router;
